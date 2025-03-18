import CV from "../models/CV.js";

const createCV = async (req, res) => {
  try {
    const cv = new CV({ user: req.user.id, ...req.body });
    await cv.save();
    res.status(201).json(cv);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get CVs
const getCVs = async (req, res) => {
  try {
    const cvs = await CV.find({ user: req.user.id });
    res.json(cvs);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export  { createCV, getCVs };
