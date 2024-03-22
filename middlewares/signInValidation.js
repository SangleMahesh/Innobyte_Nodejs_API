function signInValidate(req, res, next) {
  req
    .check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .normalizeEmail();

  req.check("password").notEmpty().withMessage("Password is required").trim();

  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).json({ errors: errors });
  }

  next();
}

module.exports = signInValidate;
