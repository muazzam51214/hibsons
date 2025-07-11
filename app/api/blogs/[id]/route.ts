import { authOptions } from "@/libs/auth";
import { connectDB } from "@/libs/db";
import Blog, { IBlog } from "@/models/Blog";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export async function GET({ params }: { params: { id: string } }) {
  try {
    await connectDB();
    const singleBlog = await Blog.findById(params.id);

    if (!singleBlog) {
      return NextResponse.json(
        { error: "Blog not found with this id!" },
        { status: 400 }
      );
    }

    return NextResponse.json(singleBlog);
  } catch (error) {
    return NextResponse.json(
      { error: "Error in fetching Blog!" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const allowedRoles = ["admin"];
    if (!allowedRoles.includes(session.user.role)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await connectDB();
    const body: IBlog = await request.json();
    const blog = await Blog.findById(params.id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Update slug if title changes
    if (body.title && body.title !== blog.title) {
      const baseSlug = slugify(body.title, { lower: true, strict: true });
      let slug = baseSlug;
      let counter = 1;
      while (await Blog.findOne({ slug, _id: { $ne: blog._id } })) {
        slug = `${baseSlug}-${counter++}`;
      }
      blog.slug = slug;
    }

    // Replace fields
    blog.title = body.title;
    blog.content = body.content;
    blog.imageUrl = body.imageUrl;

    await blog.save();

    return NextResponse.json({ message: "Blog updated", Blog }, { status: 200 });
  } catch (err) {
    console.error("Blog Update Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const allowedRoles = ["admin"];
    if (!allowedRoles.includes(session.user.role)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await connectDB();

    const blog = await Blog.findByIdAndDelete(params.id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Blog Delete Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
