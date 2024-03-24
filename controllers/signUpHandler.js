const User = require("../models/user");
const nodemailer = require("nodemailer");
require("dotenv").config();

async function handleSignUp(req, res) {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const user = await User.create({
      username,
      email,
      password,
    });

    await sendVerificationEmail(email, res);
  } catch (error) {
    console.error("Error occurred while saving user:", error);
    return res.status(500).json({ error: "Failed to create user" });
  }
}

async function sendVerificationEmail(email, res) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  const verificationCode = generateVerificationCode();

  const htmlContent = `
    <p>Thank you for signing up!</p>
    <p>Your verification code is: <strong>${verificationCode}</strong></p>
    <p>Please use this code to verify your email address.</p>
  `;

  try {
    const mail = await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: "Verification Email",
      html: htmlContent,
    });

    console.log("Message sent: %s", mail.messageId);

    return res.status(201).json({
      status: true,
      message:
        "User created successfully. Verification code has been sent to your email.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to send verification email" });
  }
}

function generateVerificationCode() {
  const min = 100000;
  const max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = handleSignUp;
