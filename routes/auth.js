const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const { email, password } = req.body;
  if (email === "" || password === "") {
    res.render("auth/signup", { errorMessage: "All the fields are mandatory" });
  } else {
    const hashedPassword = bcrypt.hashSync(password, 10);
    User.create({ email, password: hashedPassword })
      .then((userFromDB) => {
        res.render("profile");
      })
      .catch((err) => {
        if (err.code === 11000) {
          res.render("auth/signup", {
            errorMessage: "user with that email already exists",
          });
        } else {
          next(err);
        }
      });
  }
});

module.exports = router;
