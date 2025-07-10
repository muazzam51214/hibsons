import mongoose, { Schema, model, models } from "mongoose";

export interface IApplicant {
  _id?: mongoose.Types.ObjectId;
  jobId?: mongoose.Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  education: string;
  dob: Date;
  linkedInUrl: string;
  resumeUrl: string;
  answers: string[];
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const applicantSchema = new Schema<IApplicant>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    linkedInUrl: {
      type: String,
      required: true,
    },
    resumeUrl: {
      type: String,
      required: true,
    },
    answers: {
      type: [String],
    },
    status: {
      type: String,
      enum: ["new", "under_review", "interview", "selected", "rejected"],
      default: "new",
    },
    jobId: {
      type: Schema.Types.ObjectId,
      ref: "Job",
    },
  },
  {
    timestamps: true,
  }
);

const Applicant =
  models?.Applicant || model<IApplicant>("Applicant", applicantSchema);
export default Applicant;
