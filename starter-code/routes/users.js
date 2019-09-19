const express = require('express');
const router  = express.Router();

const User           = require("../models/User.js");
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;
const passport = require("passport");


router.get('/signup', (req, res, next)=>{
  
  res.render('auth/signup')
})

router.post("/signup", (req, res, next) => {
  
      let admin = false;
  
      if(req.user){
        if(req.user.isAdmin){
          admin = req.body.role? req.body.role: false
        }
      }

  const username = req.body.theUsername;
  const password = req.body.thePassword;

  console.log("this is the pw >>>>>>> ", password)
const salt  = bcrypt.genSaltSync(bcryptSalt);
const hash = bcrypt.hashSync(password, salt);

  User.create({
    username: username,
    password: hash,
    isAdmin: admin
})
.then(()=>{

    res.redirect('/')

})
.catch(error => {
  next(error);
  console.log(error);
})
})


router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
  
}));


router.get("/logout", (req, res, next) => {
    req.logout();
    res.redirect("/");
    
});

router.get('/secret', (req, res, next)=>{
  
  if(req.user){
      res.render('secret', {theUser: req.user})
  } else{
      res.redirect('/login')
  }

})

router.get('/profile', (req, res, next)=>{
  res.render('auth/profile');
})

router.post('/account/delete-my-account', (req, res, next)=>{

  User.findByIdAndRemove(req.user._id)
  .then(()=>{
      res.redirect('/')
  })
  .catch((err)=>{
      next(err)
  })

})

module.exports = router;