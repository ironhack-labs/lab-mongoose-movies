const express = require("express");
const authRoutes = express.Router();
const ensureLogin = require("connect-ensure-login");

const User = require("../models/user");

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

authRoutes.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post('/signup', (req, res, next) => {
  const salt = bcrypt.genSaltSync(10)
  req.body.password = bcrypt.hashSync(req.body.password, salt)

  User.create(req.body)
      .then(user => {
          req.session.currentUser = user
          req.flash('success', 'Registered and logged in!');
          res.status(201).redirect('/')
      })
      .catch(e => res.status(500).send(e))
});

authRoutes.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render("private", { user: req.user });
});

authRoutes.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = authRoutes;