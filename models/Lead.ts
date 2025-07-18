import mongoose, { Schema, model, models } from "mongoose";

export interface ILead {
  _id?: mongoose.Types.ObjectId;
  prefferedDateTime: Date;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  serviceInterested: string[];
  note: string;
  websiteUrl: string;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const leadSchema = new Schema<ILead>(
  {
    prefferedDateTime: {
      type: Date,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    contactPerson: {
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
    serviceInterested: {
      type: [String],
    },
    note: {
      type: String,
    },
    websiteUrl: {
      type: String,
    },
    status: {
      type: String,
      enum: ["new", "contacted", "follow_up", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

const Lead = models?.Lead || model<ILead>("Lead", leadSchema);
export default Lead;
