// routes/auth-routes.js
const express  = require("express");
const router   = express.Router();
const passport = require('passport');

// User model
const User = require("../models/User");

const bcrypt = require("bcryptjs");

const bcryptSalt = 10;



router.get("/signup", (req, res, next) => {
    res.render("userViews/signup");
  });
  


  router.post("/signup", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
  
    if (username === "" || password === "") {
      req.flash('error', 'please specify a username and password to sign up')
      res.render("userViews/signup", { message: req.flash("error") });
      return;
    }
  
    User.findOne({ username })
    .then(user => {
      if (user !== null) {
        res.render("userViews/signup", { message: req.flash("error") });
        return;
      }
  
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);
  
      User.create({
          username: username,
          password: hashPass
      })
      .then((response)=>{
        res.redirect("/");
      })
      .catch((err)=>{
        res.render("userViews/signup", { message: req.flash("error") });
      })
    })
    .catch(error => {
      next(error)
    })
  });


  router.get('/login', (req, res, next)=>{
      res.render('userViews/login', {message: req.flash('error')})
  })

  router.post('/login', passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
    successFlash: true,
    passReqToCallback: true
  }));



  router.get("/auth/google", passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login",
            "https://www.googleapis.com/auth/plus.profile.emails.read"]
  }));
  
  router.get("/auth/google/callback", passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/movies"
  }));


//logout
  router.get('/logout', (req, res, next)=>{
      req.logout()
    res.redirect('/login')
  })




module.exports = router;