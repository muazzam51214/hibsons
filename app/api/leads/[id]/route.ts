import { connectDB } from "@/libs/db";
import Lead from "@/models/Lead";
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
    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const lead = await Lead.findById(id);

    if (!lead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json(lead, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Error fetching lead" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await ctx.params;
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const deleted = await Lead.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Lead deleted" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Error deleting lead" }, { status: 500 });
  }
}
