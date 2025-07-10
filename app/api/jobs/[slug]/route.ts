import { connectDB } from "@/libs/db";
import Job from "@/models/Job";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { slug: string } }) {
  try {
    await connectDB();
    const singleJob = await Job.findOne({slug : params.slug});

    if (!singleJob) {
      return NextResponse.json(
        { error: "Job not found with this id!" },
        { status: 400 }
      );
    }

    return NextResponse.json(singleJob);
  } catch (error) {
    return NextResponse.json(
      { error: "Error in fetching job!" },
      { status: 500 }
    );
  }
}