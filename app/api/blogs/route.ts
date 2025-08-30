import { authOptions } from "@/libs/auth";
import { connectDB } from "@/libs/db";
import Blog, { IBlog } from "@/models/Blog";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export async function GET() {
  try {
    await connectDB();
    const allBlogs = await Blog.find({}).sort({ createdAt: -1 }).lean();

    if (!allBlogs || allBlogs.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(allBlogs);
  } catch{
    return NextResponse.json(
      { error: "Error in fetching Blogs!" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized Request!" },
        { status: 401 }
      );
    }

    const allowedRoles = ["admin"];
    if (!allowedRoles.includes(session.user.role)) {
      return NextResponse.json(
        { error: "Forbidden: You don't have access." },
        { status: 403 }
      );
    }

    await connectDB();

    const body: IBlog = await request.json();

    if (!body.title || !body.content || !body.imageUrl) {
      return NextResponse.json(
        { error: "Missing Required Fields!" },
        { status: 400 }
      );
    }

    // Slug
    const baseSlug = slugify(body.title, { lower: true, strict: true });
    let slug = baseSlug;
    let counter = 1;

    while (await Blog.findOne({ slug })) {
      slug = `${baseSlug}-${counter++}`;
    }

    const newBlog = await Blog.create({
      title: body.title,
      slug,
      content: body.content,
      imageUrl: body.imageUrl,
      createdBy: session.user.id,
    });

    return NextResponse.json(
      { message: "New Blog Posted", blog: newBlog },
      { status: 201 }
    );
  } catch{
    return NextResponse.json(
      { error: "Error in creating Blog!" },
      { status: 500 }
    );
  }
}
