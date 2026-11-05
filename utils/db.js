import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB connected!");
  } catch (e) {
    console.error("MongoDB error:", e);
    throw e;
  }
};