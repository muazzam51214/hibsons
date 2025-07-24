import { connectDB } from "@/libs/db";
import Applicant from "@/models/Applicant";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(
  request: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await ctx.params;
    const session = await getServerSession(authOptions);

    if (!session || !["admin", "hr"].includes(session.user.role)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid application ID" },
        { status: 400 }
      );
    }

    await connectDB();

    const application = await Applicant.findById(id).populate(
      "jobId",
      "title slug"
    );

    if (!application) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(application, { status: 200 });
  } catch (error) {
    console.error("Error fetching application:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
