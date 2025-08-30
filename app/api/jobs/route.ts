import { authOptions } from "@/libs/auth";
import { connectDB } from "@/libs/db";
import Job, { IJob } from "@/models/Job";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export async function GET() {
  try {
    await connectDB();
    const allJobs = await Job.find({}).sort({ createdAt: -1 }).lean();

    if (!allJobs || allJobs.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(allJobs);
  } catch{
    return NextResponse.json(
      { error: "Error in fetching jobs!" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized Request!" },
        { status: 401 }
      );
    }

    const allowedRoles = ["admin", "hr"];
    if (!allowedRoles.includes(session.user.role)) {
      return NextResponse.json(
        { error: "Forbidden: You don't have access." },
        { status: 403 }
      );
    }

    await connectDB();

    const body: IJob = await request.json();

    if (
      !body.title ||
      !body.description ||
      !body.location ||
      !body.department ||
      !body.type ||
      !body.experience
    ) {
      return NextResponse.json(
        { error: "Missing Required Fields!" },
        { status: 400 }
      );
    }

    // Slug
    const baseSlug = slugify(body.title, { lower: true, strict: true });
    let slug = baseSlug;
    let counter = 1;

    while (await Job.findOne({ slug })) {
      slug = `${baseSlug}-${counter++}`;
    }

    // Process optional questions
    const validatedQuestions = Array.isArray(body.questions)
      ? body.questions
          .filter((q) => q.text && q.type)
          .map((q) => ({
            text: q.text,
            type: q.type,
            options: Array.isArray(q.options) ? q.options : [],
          }))
      : [];

    const newJob = await Job.create({
      title: body.title,
      description: body.description,
      location: body.location,
      department: body.department,
      type: body.type,
      experience: body.experience,
      slug,
      questions: validatedQuestions,
      createdBy: session.user.id,
    });

    return NextResponse.json(
      { message: "New Job Posted", job: newJob },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
  
    return NextResponse.json(
      { error: "Error in creating job!" },
      { status: 500 }
    );
  }
}
