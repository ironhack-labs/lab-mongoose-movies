const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");
const flash = require("connect-flash");

router.get("/sign-up", (req, res, next) => {
  res.render("user/sign-up");
});

router.post("/sign-up", (req, res, next) => {
  let data = req.body;

  console.table(req.body);
  const userName = req.body.username;
  const userPassword = req.body.password;

  if (userName === "" || userPassword === "") {
    res.render("user/sign-up", { message: "Indicate username and password" });
    return;
  }
  //hashing the password
  const salt = bcrypt.genSaltSync(12);
  const hashedPassWord = bcrypt.hashSync(userPassword, salt);

  User.findOne({ username: userName })
    .then(foundUsername => {
      if (foundUsername !== null) {
        res.render("user/sign-up", { message: "The username already exists" });
        return;
      } else {
        User.create({
          username: userName,
          password: hashedPassWord
        })
          .then(() => {
            res.render("home-page", { data });
          })
          .catch(err => {
            next(err);
          });
      }
    })
    .catch(err => next(err));
});

router.get("/login", (req, res, next) => {
  res.render("user/login");
});

//old way without passport
// router.post("/login", (req, res, next) => {
//   const password = req.body.password;
//   const username = req.body.username;

//   if (username === "" || password === "") {
//     res.render("user/login", { message: "Indicate username and password" });
//     return;
//   }

//   User.findOne({ username: username })
//     .then(user => {
//       if (!user) {
//         res.render("user/login", { message: "User not found." });
//       }
//       if (bcrypt.compareSync(password, user.password)) {
//         req.session.currentUser = user;
//         res.redirect("/home-page");
//       } else {
//         res.render("user/login", { message: "Wrong password for user." });
//       }
//     })
//     .catch(error => {
//       next(error);
//     });
// });

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/home-page",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
  })
);

router.get("/home-page", ensureLogin.ensureLoggedIn(), (req, res, next) => {
  let data = req.user;
  console.log("-----------", data);
  res.render("home-page", { data });
});

router.post("/logout", (req, res, next) => {
  req.logOut();
  console.log("---------------- loged out");
  res.redirect("/login");
});
module.exports = router;
