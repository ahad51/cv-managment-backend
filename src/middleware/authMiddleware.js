import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default (req, res, next) => {
  const authHeader = req.header("Authorization");
  console.log("Received Header:", authHeader);

  if (!authHeader) return res.status(401).json({ message: "Access Denied" });

  const token = authHeader.split(" ")[1]; 
  console.log("Extracted Token:", token);

  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("JWT Verification Error:", err.message);
    res.status(400).json({ message: "Invalid Token" });
  }
};
