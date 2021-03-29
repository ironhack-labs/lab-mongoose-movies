const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { Error } = require("mongoose");
const session = require('express-session');

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  console.log('Session', req.session);
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
            errorMessage: "User with that email already exists",
          });
        } else if (err instanceof Error.ValidationError) {
          res.render("auth/signup", {
            errorMessage: err.message,
          });
        } else {
          next(err);
        }
      });
  }
});

router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

router.post("/login", async (req, res, next) => {
  console.log('Session', req.session)
  const { email, password } = req.body;
  if (email === "" || password === "") {
    res.render("auth/signup", { errorMessage: "All the fields are mandatory" });
  } else {
    // try{
    //   const userFromDB = await User.find({ email });
    //   console.log(userFromDB);
    // } catch (err) {
    //   next(err);
    // }
    // .findOne will return the first match against your query from the DB
    User.find({ email })
      .then((userArrFromDB) => {
        // if no user with such email -> show error
        // email matches something => [{ email: dasdas, pass: dasdas }]
        // doesn't match => []
        if (userArrFromDB.length === 0) {
          res.render("auth/login", {
            errorMessage: "User does not exist in the DB.",
          });
        } else {
          // check if password is correct
          const passwordMatch = bcrypt.compareSync(password, userArrFromDB[0].password);
          if (!passwordMatch) {
            res.render('auth/login', {
              errorMessage: "Auth does not match",
            });
          } else {
            userArrFromDB[0].password = "";
            req.session.user = userArrFromDB[0];
            //  find user redirect to profile
            res.render('profile');
          }
        }
      })
      .catch((err) => next(err));
  }
});

router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;