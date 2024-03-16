const User = require("../models/user");
const JWT = require("jsonwebtoken");

async function handleSignup(request, response) {
  const { username, email, password } = request.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    await user.save();

    const payload = {
      name: username,
    };

    const token = JWT.sign(payload, process.env.ACCESS_TOKEN_KEY);
    response.cookie("jwt", token, { httpOnly: true, secure: true });

    response.sendStatus(201);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Failed to create user" });
  }
}

module.exports = handleSignup;
