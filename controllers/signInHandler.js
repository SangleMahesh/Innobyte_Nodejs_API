const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function handleSignIn(request, response) {
  const { email, password } = request.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return response.status(401).json({ error: "Invalid email or password" });
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return response.status(401).json({ error: "Invalid email or password" });
    }

    const payload = {
      name: user.username,
      email: email,
    };

    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_KEY);
    response.cookie("jwt", token, { httpOnly: true, secure: true });

    response.status(200).json({ message: "Sign-in success", token });
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = handleSignIn;
