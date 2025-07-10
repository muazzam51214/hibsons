import { connectDB } from "@/libs/db";
import Applicant, { IApplicant } from "@/models/Applicant";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET({ params }: { params: { id: string } }) {
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
    const allApplications = await Applicant.find({ jobId: params.id })
      .sort({ createdAt: -1 })
      .lean();

    if (!allApplications || allApplications.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(allApplications);
  } catch (error) {
    return NextResponse.json(
      { error: "Error in fetching Applications!" },
      { status: 500 }
    );
  }
}
