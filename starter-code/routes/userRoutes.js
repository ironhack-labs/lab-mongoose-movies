const express = require('express');
const router  = express.Router();
const User = require('../models/User');
const bcrypt = require("bcryptjs");


router.get('/signup', (req, res, next) => {
  res.render('user-views/signup')
})

router.get('/login', (req, res, next) => {
  res.render('user-views/login')
})

router.get('/user-view/profile', (req, res, next) => {

  res.render('user-views/profile', {loggedin: req.session.loggedin_msg})
})

router.post('/user/create', (req, res, next) => {
  const thePassword = req.body.thePassword;
  const theUsername = req.body.theUsername;

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(thePassword, salt);

  User.create({
    username: theUsername,
    password: hashedPassword
  })
  
  .then(()=> {
    console.log(`New user created`);
    req.session.loggedin_msg = "You are logged in now";
    res.redirect('/user-view/profile')
  })
  .catch(err=> {
    next(err)
  })
})

router.post('/user/login', (req, res, next) => {
  const thePassword = req.body.thePassword;
  const theUsername = req.body.theUsername;

  User.findOne({"username": theUsername})
    .then(user => {
      if(!user) {
        res.redirect('/login')
        //error user not found
        return;
      }
      if( bcrypt.compareSync(thePassword, user.password)) {
        req.session.currentUser = user;
        req.session.loggedin_msg = "You are logged in now";
        res.redirect('/user-view/profile')
      } else {
        res.redirect('/login')
        //error wrong password
      }
    })
    .catch(err=> {
      next(err)
    });
})

router.get('/profile', (req,res, next) => {

  if(req.session.currentUser) {
    res.render('user-views/profile', {user: req.session.currentUser})
    
  } else {
    req.session.errorCount = 1;
    req.session.errorMessage = "Sorry, you have to login first"
    res.redirect('/')
  }

})

router.post('/logout', (req,res,next) => {
  req.session.currentUser = null; 
  req.session.loggedin_msg = null;
  req.session.loggedout_msg = `You are now on your own`
  req.session.errorCount = 1;
  res.redirect('/')
  
})

module.exports = router;