import mongoose, { Document } from "mongoose";

export interface IBrand extends Document {
  name: string;
  logo: string;
  created_at?: Date;
  updated_at?: Date;
}

const schema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now(),
    required: false,
  },
  updated_at: {
    type: Date,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: false,
  },
});

export const Brand = mongoose.model<IBrand>("Brand", schema);
