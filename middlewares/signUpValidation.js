function signUpValidate(req, res, next) {
  req
    .check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format")
    .normalizeEmail();
  req
    .check("username")
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 3, max: 16 })
    .withMessage("Username must be between 3 and 16 characters long")
    .trim(); // Added to remove leading and trailing whitespace

  req
    .check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/
    )
    .withMessage(
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    );

  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).json({ errors: errors });
  }

  // If no validation errors, proceed to the next middleware
  next();
}

module.exports = signUpValidate;
