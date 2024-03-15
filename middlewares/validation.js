async function validate(request, response, next) {
  try {
    const { username, password } = request.body;
    if (!username || username.length < 3 || username.length > 16) {
      throw new Error("Username must be between 3 and 16 characters long");
    }
    if (!password || password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }
    next();
  } catch (error) {
    console.log(error);
    response.status(400).json({ error: error.message });
  }
}

module.exports = validate;
