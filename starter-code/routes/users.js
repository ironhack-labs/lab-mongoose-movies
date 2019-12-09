const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const bcrypt = require("bcryptjs");

router.get("/signup", (req, res, next) => {
  res.render("users/signup");
});

/* GET user page */
router.get("/", (req, res, next) => {
  res.render("users/index");
});

// Post the

module.exports = router;
