import mongoose, { Document } from "mongoose";

export interface Product extends Document {
  name: string;
  price: string;
  active: boolean;
  description?: string;
  created_at: Date;
  updated_at: Date;
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
  price: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: false,
  },
  description: {
    type: String,
    required: false,
  },
  brand: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
});

export const Product = mongoose.model<Product>("Product", schema);
