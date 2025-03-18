import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js"; 
import { createCV, getCVs } from "../controllers/cvController.js";

const router = Router();

router.post("/", authMiddleware, createCV);
router.get("/", authMiddleware, getCVs);

export default router;
