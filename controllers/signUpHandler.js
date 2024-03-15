const User = require("../models/user");

async function handleSignup(request, response) {
  const { username, email, password } = request.body;
  const user = User.create({
    username,
    email,
    password,
  });
  try {
    (await user).save();
  } catch (error) {
    console.log(error);
  }
  response.sendStatus(201);
}

module.exports = handleSignup;
