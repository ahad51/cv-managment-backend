import { Schema, model } from "mongoose";

const CVSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  personalDetails: {
    name: String,
    email: String,
    phone: String,
    address: String,
    linkedIn: String,
    github: String,
  },
  workExperience: [
    {
      jobTitle: String,
      company: String,
      startDate: String,
      endDate: String,
      description: String,
    },
  ],
  education: [
    {
      degree: String,
      institution: String,
      startDate: String,
      endDate: String,
      description: String,
    },
  ],
});

export default model("CV", CVSchema);
