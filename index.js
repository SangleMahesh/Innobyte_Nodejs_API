const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

//Connection to database
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (error) {
    console.error("Connection error:", error);
  }
}

connectToDatabase();

// Start server
function startServer() {
  app.listen(process.env.PORT, () => {
    console.log(`Server started on port : http://localhost:${port}`);
  });
}

startServer();
