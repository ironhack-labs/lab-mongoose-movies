const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const passport = require("passport");

router.use((req, res, next) => {
  if (!req.user) {
    req.flash("error", "please log in to use this feature");
    res.redirect("/login");
  }
  if (!req.user.isAdmin) {
    req.flash("error", "you do not have access to this feature");
    res.redirect("/");
  }
  next();
}
)

router.get("/create-new-account", (req, res, next) => {
  res.render("user-views/new-account");
});

router.get("/active-users", (req, res, next) => {
  User.find()
    .then(allUsers => {
      res.render("user-views/active-users", { users: allUsers });
    })
    .catch(err => {
      next(err);
    });
});

router.post("/admin/delete/:id", (req, res, next) => {
  User.findByIdAndRemove(req.params.id)
    .then(result => {
      res.redirect("/active-users");
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
