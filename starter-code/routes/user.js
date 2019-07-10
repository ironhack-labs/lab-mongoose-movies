const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const bcrypt  = require('bcryptjs');
const passport = require('passport');
const ensureLogin = require("connect-ensure-login");

router.get('/signup', (req, res, next)=>{
    res.render('user/signup');
})

router.post('/signup', (req, res, next)=>{
  const thePassword = req.body.thePassword;
  const theUsername = req.body.theUsername;

  const salt = bcrypt.genSaltSync(12);
  const hashedPassWord =  bcrypt.hashSync(thePassword, salt);

  User.create({
    username: theUsername,
    password: hashedPassWord
  })
  .then(()=>{
    console.log('worked');
    res.redirect('/')
  })
  .catch((err)=>{
    next(err);
  })
})

router.get('/profile', (req, res, next) => {
  if (!req.user) {
    req.flash('error', 'You must be logged in to use that feature.');
    res.redirect('/login');
  } else {
    res.render('user/profile');
  }
})

router.get('/login', (req, res, next)=>{
  res.render('user/login')
})

router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.post('/logout', (req, res, next)=>{
  req.logout();
  res.redirect("/login");
})

module.exports = router; 