import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import Job from "@/models/Job";
import Lead from "@/models/Lead";
import Applicant from "@/models/Applicant";
import { connectDB } from "@/libs/db";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await connectDB();
  const totalJobs = await Job.countDocuments({});
  const activeJobs = await Job.countDocuments({ status: "open" });
  const newLeads = await Lead.countDocuments({ status: "new" });
  const totalApplicants = await Applicant.countDocuments({});

  return NextResponse.json({
    totalJobs,
    activeJobs,
    newLeads,
    totalApplicants
  });
}