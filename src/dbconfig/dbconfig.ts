import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }
    const connectionInstant = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `\n Connected to MongoDB at ${connectionInstant.connection.host}:${connectionInstant.connection.port}`
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectDB;
