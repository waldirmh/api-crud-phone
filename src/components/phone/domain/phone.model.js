import mongoose from "mongoose";

const { Schema, model } = mongoose;

const phoneSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    loveCount: {
      type: Number,
      default: 0,
    },
    images: [
      {
        type: String,
      },
    ],
    created: {
      type: Date,
      default: Date.now,
    },
    updated: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "phone" }
);

const Phone = model("Phone", phoneSchema);

export { Phone };