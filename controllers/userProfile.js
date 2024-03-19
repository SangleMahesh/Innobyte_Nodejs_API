const User = require("../models/user");

async function getUser(request, response) {
  try {
    const { email } = request.body;
    const user = await User.find({ email });
    if (!user) {
      return response.status(404).json({ error: "User not found" });
    } else response.status(200).json({ user });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = getUser;
