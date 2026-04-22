const express = require("express");
const router = express. Router();


// FIXED: Correct file name (lowercase u)
const { register, login } = require("../Controllers/userController");

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

module.exports = router;