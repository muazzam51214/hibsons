import mongoose, { Schema, model, models } from "mongoose";

export interface IQuestion {
  text: string;
  type: "text" | "textarea" | "select" | "radio" | "checkbox";
  options?: string[];
}

export interface IJob {
  _id?: mongoose.Types.ObjectId;
  title: string;
  slug: string;
  description: string;
  location: string;
  department: string;
  type: string;
  status: string;
  experience: string;
  questions?: IQuestion[];
  createdBy?: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const questionSchema = new Schema<IQuestion>(
  {
    text: { type: String, required: true },
    type: {
      type: String,
      enum: ["text", "textarea", "select", "radio", "checkbox"],
      required: true,
    },
    options: [String],
  },
  { _id: false }
);

const jobSchema = new Schema<IJob>(
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
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },
    experience: {
      type: String,
      required: true,
    },
    questions: [questionSchema],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Job = models?.Job || model<IJob>("Job", jobSchema);
export default Job;
