const express = require('express');
const router = express.Router();

// Imports User Model
const User = require("../models/User");

// Imports Bcrypt and set it up to encrypt password
const bcrypt = require("bcryptjs");
const bcryptSalt = 10;

router.get('/signup', (req, res, next) => {
  res.render("auth-views/signup", {user: req.session.currentUser})
});

router.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if(username === "" || password === ""){
    res.render("auth-views/signup",{
      errorMessage: "Indicate a username and a password to sign up", user: req.session.currentUser
    })
    return;
  }

  User.findOne({ "username": username })
  .then(userFromDB =>{
    if(userFromDB !== null){
      res.render("auth-views/signup", {
        errorMessage: "User already exists", user: req.session.currentUser
      })
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    
    user = new User({
      username: username,
      password: hashPass
    })

    user.save()
      .then(resFromServer => {
        console.log("User saved")
        res.redirect("/");
      })
      .catch(err => next(err))
    
    })
    .catch(err => next(err))
});

router.get('/login', (req, res, next) => {
  res.render("auth-views/login", { user: req.session.currentUser})
});

router.post('/login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if(username === "" || password === ""){
    res.render("auth-views/signup",{
      errorMessage: "Please provide both username and password to login.", user: req.session.currentUser
    })
    return;
  }

  User.findOne({ "username": username })
  .then(userFromDB =>{
    if(userFromDB === null){
      res.render("auth-views/login", {
        errorMessage: "User does not exist", user: req.session.currentUser
      })
      return;
    }

    // const salt = bcrypt.genSaltSync(bcryptSalt);
    // const hashPass = bcrypt.hashSync(password, salt);
    
    if(bcrypt.compareSync(password, userFromDB.password)){
      req.session.currentUser = userFromDB;
      res.redirect("/")
    }else{
      res.redirect("/login", {errorMessage: "Please check your username and password and try again"})
    }
    
    })
    .catch(err => next(err));
});

router.use((req, res, next) => {
  if (req.session.currentUser) { 
    next(); 
  } else {
    res.redirect("/login");
  }
});

router.get("/secret", (req, res, next) => {
  res.render("auth-views/secret", {user: req.session.currentUser});
});

router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    // can't access session here
    res.redirect("/login");
  });
});

module.exports = router;
