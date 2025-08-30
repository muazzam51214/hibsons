import { connectDB } from "@/libs/db";
import Job from "@/models/Job";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const allJobs = await Job.find({status : "open"}).sort({ createdAt: -1 }).lean();

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