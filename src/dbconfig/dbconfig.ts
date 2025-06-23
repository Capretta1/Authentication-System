import mongoose from "mongoose";

async function connectDB() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        err,
        "MongoDB connection error, Please make sure mongodb is running",
        +err
      );
      process.exit();
    });
  } catch (error) {
    console.log(error, "Something goes wrong");
  }
}

export default connectDB;
