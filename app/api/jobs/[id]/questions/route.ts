import { connectDB } from "@/libs/db";
import Job from "@/models/Job";
import { NextRequest, NextResponse } from "next/server";
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

    return NextResponse.json(singleJob.questions);
  } catch (error) {
    return NextResponse.json(
      { error: "Error in fetching questions!" },
      { status: 500 }
    );
  }
}