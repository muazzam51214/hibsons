import { authOptions } from "@/libs/auth";
import { connectDB } from "@/libs/db";
import Job, { IJob } from "@/models/Job";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export async function GET(
  request: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await ctx.params;
    await connectDB();
    const singleJob = await Job.findById(id);

    if (!singleJob) {
      return NextResponse.json(
        { error: "Job not found with this id!" },
        { status: 400 }
      );
    }

    return NextResponse.json(singleJob);
  } catch{
    return NextResponse.json(
      { error: "Error in fetching job!" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const allowedRoles = ["admin", "hr"];
    if (!allowedRoles.includes(session.user.role)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await connectDB();
    const body: IJob = await request.json();
    const job = await Job.findById(params.id);

    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    // Update slug if title changes
    if (body.title && body.title !== job.title) {
      const baseSlug = slugify(body.title, { lower: true, strict: true });
      let slug = baseSlug;
      let counter = 1;
      while (await Job.findOne({ slug, _id: { $ne: job._id } })) {
        slug = `${baseSlug}-${counter++}`;
      }
      job.slug = slug;
    }

    // Replace fields
    job.title = body.title;
    job.description = body.description;
    job.location = body.location;
    job.department = body.department;
    job.type = body.type;
    job.experience = body.experience;
    job.status = body.status;

    if (Array.isArray(body.questions)) {
      job.questions = body.questions
        .filter((q) => q.text && q.type)
        .map((q) => ({
          text: q.text,
          type: q.type,
          options: Array.isArray(q.options) ? q.options : [],
        }));
    }

    await job.save();

    return NextResponse.json({ message: "Job updated", job }, { status: 200 });
  } catch (err) {
    console.error("Job Update Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const allowedRoles = ["admin", "hr"];
    if (!allowedRoles.includes(session.user.role)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await connectDB();

    const job = await Job.findByIdAndDelete(params.id);

    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Job deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Job Delete Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
