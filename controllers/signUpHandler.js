const User = require("../models/user");
async function handleSignUp(req, res) {
  const { username, email, password } = req.body;

  try {
    const newUser = await User.create({
      username,
      email,
      password,
    });

    return res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error occurred while saving user:", error);
    return res.status(500).json({ error: "Failed to create user" });
  }
}

module.exports = handleSignUp;
