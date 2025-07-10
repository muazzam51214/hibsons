import mongoose, { Schema, model, models } from "mongoose";

export interface IBlog {
  _id?: mongoose.Types.ObjectId;
  title: string;
  slug: string;
  content: string;
  imageUrl: string;
  createdBy: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Blog = models?.Blog || model<IBlog>("Blog", blogSchema);
export default Blog;
