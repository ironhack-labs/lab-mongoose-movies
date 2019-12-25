
const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const bcrypt  = require('bcryptjs');
// const passport = require('passport');
// const ensureLogin = require("connect-ensure-login");

router.get('/signup', (req, res, next)=>{
    res.render('userViews/signup');
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
      console.log('yay');
      res.redirect('/')
  })
  .catch((err)=>{
      next(err);
  })
})


router.get('/login', (req, res, next)=>{
  res.render('userViews/login')
})




module.exports = router;