const express    = require('express');
const router     = express.Router();
const User       = require('../models/User');
const bcrypt     = require('bcrypt');
const bcryptSalt = 10;
const passport   = require('passport');
const flash      = require("connect-flash");

router.get('/signup', (req, res, next)=>{
    res.render('users/signup')
})

router.post('/signup', (req, res, next)=>{
    const username = req.body.username
    const password = req.body.password

    if (username === "" || password === "") {
      req.flash('error', 'please specify a username and password to sign up')
      res.render("users/signup", { message: req.flash("error") });
      return;
      }

      User.findOne({ "username": username })
      .then(user => {
          if (user !== null) {
            res.render("users/signup", { message: req.flash("error") });
        return;
        }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      User.create({
          username: username,
          password: hashPass
      })
      .then((result)=>{
          res.redirect('/');
      })
      .catch((err)=>{
        res.render("users/signup", {message: req.flash("error") });
      })
      })
      .catch(error => {
        next(error)
      })
    });

router.get('/login', (req, res, next)=>{
    res.render('users/login', {message: req.flash('error')})
  })

router.post('/login', passport.authenticate('local', {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
  successFlash: true,
  passReqToCallback: true
}));

router.get("/logout", (req, res, next) => {
    req.logout();
    res.redirect('/');
    
  });

router.get("/auth/google", passport.authenticate("google", {
  scope: ["https://www.googleapis.com/auth/plus.login",
          "https://www.googleapis.com/auth/plus.profile.emails.read"]
}));

router.get("/auth/google/callback", passport.authenticate("google", {
  failureRedirect: "/",
  successRedirect: "/"
}));

module.exports = router;
