import { connectDB } from "@/libs/db";
import Lead from "@/models/Lead";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const allowedRoles = ["admin", "sales"];
    if (!allowedRoles.includes(session.user.role)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await connectDB();

    const leads = await Lead.find().sort({ createdAt: -1 }).lean();

    return NextResponse.json(leads, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch leads:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const {
      prefferedDate,
      prefferedTime,
      companyName,
      contactPerson,
      email,
      phone,
      serviceInterested,
      note,
      websiteUrl,
    } = await req.json();

    if (
      !prefferedDate ||
      !prefferedTime ||
      !companyName ||
      !contactPerson ||
      !email ||
      !phone
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newLead = await Lead.create({
      prefferedDate,
      prefferedTime,
      companyName,
      contactPerson,
      email,
      phone,
      serviceInterested,
      note,
      websiteUrl,
    });

    return NextResponse.json(
      { message: "Lead submitted", lead: newLead },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit lead" },
      { status: 500 }
    );
  }
}
