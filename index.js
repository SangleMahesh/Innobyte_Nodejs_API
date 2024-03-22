const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const router = require("./routes/router");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");

const app = express();
const port = process.env.PORT || 5000;

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(expressValidator());

//Route
app.use("/api", router);

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
  app.listen(port, () => {
    console.log(`Server started on port : http://localhost:${port}`);
  });
}

startServer();
