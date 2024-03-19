const express = require("express");
const handleSignup = require("../controllers/signUpHandler");
const handleSignIn = require("../controllers/signInHandler");
const validate = require("../middlewares/validation");
const verifyToken = require("../middlewares/verifyUser");
const getUser = require("../controllers/userProfile");

const router = express.Router();

router.post("/signup", validate, handleSignup);
router.post("/signin", handleSignIn);
router.get("/profile", verifyToken, getUser);

module.exports = router;
