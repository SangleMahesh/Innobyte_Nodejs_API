const express = require("express");
const handleSignUp = require("../controllers/signUpHandler");
const handleSignIn = require("../controllers/signInHandler");
const signUpValidate = require("../middlewares/signUpValidation");
const verifyToken = require("../middlewares/verifyUser");
const getUser = require("../controllers/userProfile");
const signInValidate = require("../middlewares/signInValidation");

const router = express.Router();

router.post("/signup", signUpValidate, handleSignUp);
router.post("/signin", signInValidate, handleSignIn);
router.get("/profile", verifyToken, getUser);

module.exports = router;
