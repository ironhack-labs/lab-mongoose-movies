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
  const username = req.body.username;
  const password = req.body.password;
  

  if (!username || !password) {
    res.render("auth/signup", {
      errorMessage: "Indicate a username and a password to sign up"
    });
    return;
  }
  User.findOne({ "username": username })
  .then(user => {
    if (user !== null) {
      res.render("auth/signup", {
        errorMessage: "The username already exists!"
      });
      return;
    }
    
    const salt     = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    
    const newUser = new User({
      username,
      password: hashPass
    
    
  })
  newUser.save((err) => {
    if (err) {
      res.render("auth/signup", { message: "Something went wrong" });
    } else {
      res.redirect("/");
    }
  });
})
.catch(error => {
  console.log(error);
})
});

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
    req.logout()
    res.redirect("/");
 
});

router.get('/secret', (req, res, next)=>{

  if(req.user){
      res.render('secret', {theUser: req.user})
  } else{
      res.redirect('/')
  }

})



module.exports = router;