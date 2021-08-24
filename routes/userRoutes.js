const express = require("express");
const router = express.Router();
const User = require("../models/User.model");

const bcrypt = require("bcryptjs");
const saltRounds = 10;

router.get("/register", (req, res, next) => {
  // console.log("Boo!")
  res.render("user/userCreate");
});

router.post("/userCreate", (req, res) => {
  const salt = bcrypt.genSaltSync(saltRounds);

  const hash1 = bcrypt.hashSync(req.body.password, salt);

  User.create({ username: req.body.username, password: hash1 }).then(() => {
    res.send("user created");
  });
});

// LOGIN FLOW
router.get("/login", (req, res) => {
  res.render("user/login");
});

router.post("/login-the-user", (req, res) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (!user) {
      res.send("user not found");
    }
    //user.password // from db (hashed)
    //req.body.password // from browser
    if (bcrypt.compareSync(req.body.password, user.password)) {
      req.session.currentUser = user;
      res.redirect("/index");
    } else {
      res.send("password not correct");
    }
  });
});

module.exports = router;
