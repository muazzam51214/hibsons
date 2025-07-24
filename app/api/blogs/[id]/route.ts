import { authOptions } from "@/libs/auth";
import { connectDB } from "@/libs/db";
import Blog, { IBlog } from "@/models/Blog";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export async function GET(
  request: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await ctx.params;
    await connectDB();
    const singleBlog = await Blog.findById(id);

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
  ctx: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await ctx.params;
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
    const blog = await Blog.findById(id);

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

    return NextResponse.json(
      { message: "Blog updated", Blog },
      { status: 200 }
    );
  } catch (err) {
    console.error("Blog Update Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await ctx.params;
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const allowedRoles = ["admin"];
    if (!allowedRoles.includes(session.user.role)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await connectDB();

    const blog = await Blog.findByIdAndDelete(id);

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
