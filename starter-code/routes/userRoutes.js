const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const flash = require("connect-flash");
const passport = require("passport");

router.get("/signup", (req, res, next) => {
  res.render("user-views/signup", { msg: req.session.msg });
});

router.get("/login", (req, res, next) => {
  res.render("user-views/login");
});

router.get("/user-view/profile", (req, res, next) => {
  req.flash("success", "Logged in successfully");
  console.log(req.user);
  res.render("user-views/profile", { user: req.user });
});

router.post("/user/create", (req, res, next) => {
  const thePassword = req.body.password;
  const theUsername = req.body.username;
  if (theUsername === "" || thePassword === "") {
    req.session.msg = "Indicate username and password";
    res.redirect("/signup");
  }
  User.findOne({ username: theUsername }).then(user => {
    if (user !== null) {
      req.session.msg = "The username already exists";
      res.redirect("/signup");
    }
  });
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(thePassword, salt);
//Niether this methid, nor the User.create maintain session
//after new user signup. req.user = undefined.
// cannot attach it to req.user. 
//attaching to req.session.whatever works great

  // const newUser = new User({
  //   username: theUsername,
  //   password: hashedPassword
  // });

  // newUser.save((err) => {
  //   if (err) {
  //     next(err);
  //   } else {
  //     req.user = newUser;
  //     console.log(`New user created`);
  //     res.redirect("/user-view/profile");
  //   }
  // });

  User.create({
    username: theUsername,
    password: hashedPassword
  })
    .then(() => {
      req.user = user;
      console.log(`New user created`);
      res.redirect("/user-view/profile");
    })
    .catch(err => {
      next(err);
    });
});

router.post(
  "/user/login",
  passport.authenticate("local", {
    successRedirect: "/user-view/profile",
    failureRedirect: "/login",
    failureFlash: true,
    successFlash: "Logged in successfully",
    passReqToCallback: true
  })
);

router.get("/profile", (req, res, next) => {
  if (req.user) {
    res.render("user-views/profile", { user: req.user });
  } else {
    req.flash("error", "Please log in to access your profile");
    res.redirect("/login");
  }
});

router.post("/logout", (req, res, next) => {
  req.logout();
  req.flash("error", "Logged out successfully");
  res.redirect("/");
});

module.exports = router;
