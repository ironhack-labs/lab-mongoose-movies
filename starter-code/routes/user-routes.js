const express = require('express');
const router = express.Router();
const User =  require('../models/User');

const bcrypt =  require('bcryptjs');
const passport = require('passport');


router.get('/signup', (req,res,next) => {
  res.render('users/signup')
});

router.post('/signup',(req,res,next) => {
      let username = req.body.theUsername;
      let pword =  req.body.thePassword;
  if(!username || !pword){
    req.flash('error','Please provide both username and password it seems you have forgotten one of both of them')
    res.redirect('/signup')
  }

  User
      .findOne({ username })
  .then(user => {
    if (user !== null) {
      req.flash('error', 'The username already exists')
      res.redirect('/signup')
    }
  })

  let salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(pword,salt);

  User
      .create(
        {
          username: username,
          password: hashedPassword
        })
        .then(()=>{
          req.flash('success','account successfully created')
          res.redirect('/');
        })
        .catch(err => next(err))
});

router.get('/login',(req,res,next) => {
  res.render('users/login');
})

router.post('/login', passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));



router.post('/logout',(req,res,next) => {
  req.logout();
  res.redirect('/login');
});

router.get('/secret',(req,res,next) => {
  if(!req.user){
    req.flash('error','Please log in to view secret page')
    res.redirect('/login')
  }

  res.render('secret');
})



module.exports = router;