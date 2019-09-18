const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

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

router.post("/login", (req, res, next) => {
  const username = req.body.theUsername;
  const password = req.body.thePassword;

  User.findOne({ username: username })
  .then(userFromDB => {
    if (!userFromDB) {
      res.redirect("/");
    }
    if(bcrypt.compareSync(password, userFromDB.password)){ // this saves the login in the session
      req.session.currentUser = userFromDB; // this logs you in
      res.redirect("/");
    } else {
      res.redirect('/');
    }
  })
  .catch((err) => {
    next(err);
  })
});

router.post("/log-out", (req, res, next) => {
  req.session.destroy();
  res.redirect("/");
});

router.get("/secret", (req, res, next) => {
  if(req.session.currentUser){
    res.render("user-views/secret", {theUser: req.session.currentUser});
  }
  else {
    res.redirect("/login");
  }
});

module.exports = router;
