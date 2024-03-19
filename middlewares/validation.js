const { validationResult, body } = require("express-validator");
const User = require("../models/user");

async function validate(req, res, next) {
  body("username")
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 3, max: 16 })
    .withMessage("Username must be between 3 and 16 characters long")
    .custom(async (value) => {
      const existingUser = await User.findOne({ username: value });
      if (existingUser) throw new Error("Username already taken");
    })(req, res, next);

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")(req, res, next);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // If no validation errors, proceed to the next middleware
  next();
}

module.exports = validate;
