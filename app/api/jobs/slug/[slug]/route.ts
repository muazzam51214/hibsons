import { connectDB } from "@/libs/db";
import Applicant from "@/models/Applicant";
import Job from "@/models/Job";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  ctx: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await ctx.params;
    await connectDB();
    const singleJob = await Job.findOne({slug});

    if (!singleJob) {
      return NextResponse.json(
        { error: "Job not found with this id!" },
        { status: 400 }
      );
    }

    const applicantsCount = await Applicant.countDocuments({ jobId: singleJob._id });
    
    return NextResponse.json({singleJob, applicantsCount});
  } catch (error) {
    return NextResponse.json(
      { error: "Error in fetching job!" },
      { status: 500 }
    );
  }
}