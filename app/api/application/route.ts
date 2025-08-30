import { connectDB } from "@/libs/db";
import Applicant, { IApplicant } from "@/models/Applicant";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
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
    const allApplications = await Applicant.find({})
      .sort({ createdAt: -1 })
      .lean();

    if (!allApplications || allApplications.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(allApplications);
  } catch (error) {
    return NextResponse.json(
      { error: `Error in fetching Applications: ${error}` },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body: IApplicant = await req.json();

    if (
      !body.jobId ||
      !body.name ||
      !body.email ||
      !body.phone ||
      !body.address ||
      !body.city ||
      !body.education ||
      !body.dob ||
      !body.linkedInUrl ||
      !body.resumeUrl ||
      !Array.isArray(body.answers)
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newApplication = await Applicant.create({
      jobId: body.jobId,
      name: body.name,
      email: body.email,
      phone: body.phone,
      address: body.address,
      city: body.city,
      education: body.education,
      dob: body.dob,
      linkedInUrl: body.linkedInUrl,
      resumeUrl: body.resumeUrl,
      answers: body.answers,
    });

    return NextResponse.json(
      { message: "Application submitted", application: newApplication },
      { status: 201 }
    );
  } catch (err) {
    console.error("Application Error:", err);
    return NextResponse.json({ error: "Failed to apply" }, { status: 500 });
  }
}
