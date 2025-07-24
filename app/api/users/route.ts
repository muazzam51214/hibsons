import { connectDB } from "@/libs/db";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (session.user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await connectDB();
    const { searchParams } = new URL(request.url);
    const role = searchParams.get("role");

    const filter = role ? { role } : {};

    const users = await User.find(filter)
      .select("-password")
      .sort({ createdAt: -1 });

    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    console.error("User Fetching Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (session.user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await connectDB();
    const { name, email, password, role, avatar } = await req.json();

    if (!name || !email || !password || !role || !avatar) {
      return NextResponse.json({ error: "Missing fields are required" }, { status: 400 });
    }

    const allowedRoles = ["hr", "sales", "associate", "client", "admin"];
    if (!allowedRoles.includes(role)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 409 }
      );
    }

    const newUser = await User.create({
      name,
      email,
      password,
      role,
      avatar,
    });

    return NextResponse.json(
      { message: "User created", user: newUser },
      { status: 201 }
    );
  } catch (err) {
    console.error("User Creation Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}