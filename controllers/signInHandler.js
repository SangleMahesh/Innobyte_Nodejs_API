const User = require("../models/user");
const bcrypt = require("bcrypt");

async function handleSignIn(request, response) {
  const { email, password } = request.body;
  try {
    const user = User.findOne({ email });
    const hashedPassword = user.password;

    const matchPassword = bcrypt.compare(password, hashedPassword);
    if (!user || !matchPassword) {
      return response.status(401).json({ error: "Invalid email or password" });
    }

    const payload = {
      name: username,
      email: email,
    };

    const token = JWT.sign(payload, process.env.ACCESS_TOKEN_KEY);
    response.cookie("jwt", token, { httpOnly: true, secure: true });
  } catch (error) {
    response.status(500).json({ error });
  }
}
module.exports = handleSignIn;
