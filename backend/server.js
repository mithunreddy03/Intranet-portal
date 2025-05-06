require("dotenv").config(); //  Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log(" MongoDB connected successfully"))
  .catch((err) => {
    console.error(" MongoDB connection error:", err);
    process.exit(1);
  });

// Routes
app.use("/api/auth", require("./routes/auth"));

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
