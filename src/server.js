import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import cvRoutes from "./routes/cvRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/cv", cvRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(6000, () => console.log("🚀 Server running on port 6000"));
  })
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));
