import mongoose from "mongoose";

const connectDB = async () => {
  try {

    mongoose.connection.on("connected", () =>
      console.log("Database connected"),
    );

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });
    
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    throw error;
  }
};

export default connectDB;
