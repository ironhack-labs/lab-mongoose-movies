const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const bcrypt  = require('bcryptjs');
const bcryptSalt = 10;
const passport = require("passport");

router.get("/login", (req, res, next)=>{
  res.render("users/login", {message: req.flash("error")})
})

router.get("/signup", (req, res, next)=>{
  res.render("users/signup")
})

router.post("/signup", (req, res, next)=>{
  if(req.body.username === "" || req.body.password === "") {
    res.render("users/signup", {errorMessage: "Indicate a username and a password to sign up."});
    return;
  }
  User.findOne({username: req.body.username})
  .then((user)=>{
    if(user !== null) {
      res.render("users/signup", {errorMessage: "Sorry, that username is taken."});
    return;
    }
  })
  .catch((err)=>{
    next(err)
  })

  const salt     = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(req.body.password, salt);


  User.create({username: req.body.username, password: hashPass})
  .then(()=>{
      res.redirect('/');
  })
  .catch((err)=>{
      next(err);
  });
});

// router.post("/login", (req, res, next)=>{
//   if(req.body.username === "" || req.body.password === "") {
//     res.render("users/login", {errorMessage: "Indicate a username and a password to log in."});
//     return;
//   }
//   User.findOne({username: req.body.username})
//   .then((user)=>{
//     if(!user) {
//       res.render("users/login", {errorMessage: "Sorry, that username is taken."});
//     return;
//     }
//     if (bcrypt.compareSync(req.body.password, user.password)) {
//       req.session.currentUser = user;
//       res.redirect("/");
//     } else {
//       res.render("users/login", {errorMessage: "Incorrect password"});
//     }
//   })
//   .catch((err)=>{
//     next(err)
//   })
// })

router.post("/login", passport.authenticate("local", {
  successRedirect: "/user/login",
  failureRedirect: "/user/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/user/login");
});

router.get('/secret', (req, res, next) => {
  if(req.user){
    res.render('users/secret', {user: req.user});
  } else{
    res.redirect('/user/login');
  }
});


module.exports = router;