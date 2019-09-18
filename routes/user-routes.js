const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const passport = require("passport");

router.get("/signup", (req, res, next) => {
  res.render("user-views/signup");
});

// you can have routes with the same name

router.post("/signup", (req, res, next) => {
  const username = req.body.theUsername;
  const password = req.body.thePassword;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  User.create({
    username: username,
    password: hash
  })
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      next(err);
    });
});

router.get("/login", (req, res, next) => {
  res.render("user-views/login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
  })
);

router.post("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/");
});

router.get("/secret", (req, res, next) => {
  if (req.user) {
    res.render("user-views/secret", { user: req.user });
  } else {
    res.redirect("/");
  }
});

module.exports = router;
