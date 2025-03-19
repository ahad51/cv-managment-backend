import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";  // Import CORS
import authRoutes from "./routes/authRoutes.js";
import cvRoutes from "./routes/cvRoutes.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/cv", cvRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));
