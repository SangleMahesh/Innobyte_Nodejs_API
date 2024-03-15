const express = require("express");
const handleSignup = require("../controllers/signUpHandler");
const validate = require("../middlewares/validation");

const router = express.Router();

router.post("/signup", validate, handleSignup);

module.exports = router;
