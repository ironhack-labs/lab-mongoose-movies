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
  if(req.user) {
    req.flash('error', `${req.user.username}, you are already logged in. Enjoy your private space`)
    res.redirect('/profile')
  } else {

    res.render("user-views/login");
  }
});

router.get("/user-view/profile", (req, res, next) => {
  req.flash("success", "Logged in successfully");
  console.log(req.user);
  res.render("user-views/profile", { user: req.user });
});

router.post("/user/create", (req, res, next) => {
  const thePassword = req.body.password;
  const theUsername = req.body.username;
  const email = req.body.email;
  

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

  User.create({
    username: theUsername,
    password: hashedPassword,
    email: email
  })
    .then((user) => {
      
      console.log(`New user created`);
      req.login(user, ()=> {
        req.flash('success', "Signed up successfully")
        res.redirect('/profile')
      })
     
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

router.get("/auth/google", passport.authenticate("google", {
  scope: ["https://www.googleapis.com/auth/plus.login",
          "https://www.googleapis.com/auth/plus.profile.emails.read"]

          //user.info.email will give you an email
}));

router.get("/auth/google/callback", passport.authenticate("google", {
  failureRedirect: "/",
  successRedirect: "/profile"
}));









module.exports = router;
