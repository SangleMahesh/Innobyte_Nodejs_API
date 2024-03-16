const express = require("express");
const handleSignup = require("../controllers/signUpHandler");
const handleSignIn = require("../controllers/signInHandler");
const validate = require("../middlewares/validation");
const verifyToken = require("../middlewares/verifyUser");

const router = express.Router();

router.post("/signup", validate, handleSignup);
router.post("/signin", verifyToken, handleSignIn);

module.exports = router;
