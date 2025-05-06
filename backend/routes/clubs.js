const express = require("express");
const multer = require("multer");
const Club = require("../models/club");
const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// POST route to create a new club
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, category, description, founderName, creationDate } = req.body;
    const image = req.file.filename;

    const newClub = new Club({
      name,
      category,
      description,
      founderName,
      creationDate,
      image,
    });

    await newClub.save();
    res.status(201).json({ message: "Club added successfully" });
  } catch (error) {
    console.error("Error creating club:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all clubs
router.get("/", async (req, res) => {
  try {
    const clubs = await Club.find();
    res.status(200).json(clubs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch clubs" });
  }
});

module.exports = router;