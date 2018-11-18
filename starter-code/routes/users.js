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
  res.render("users/signup", {message: req.flash("error")})
})

router.post("/signup", (req, res, next)=>{
  // if(req.body.username === "" || req.body.password === "") {
  //   res.render("users/signup", {message: "Indicate a username and a password to sign up."});
  //   return;
  // }
  User.findOne({username: req.body.username})
  .then((user)=>{
    if(user !== null) {
      req.flash("error", "Username taken")
      res.redirect("/user/signup");
     return;
    }
    const salt     = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hashPass;
    req.body.admin = false;
    User.create(req.body)
    .then((newUser)=>{
        req.login(newUser, (err) => {
          if(err) {
            req.flash("error", "Couldn't create the user, please try again later.");
            res.redirect("/login");
            return
          }
          res.redirect("/user/secret");
        });
    })
    .catch((err)=>{
        next(err);
    });

  })
  .catch((err)=>{
    next(err)
  })

});
// Manual login
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
  successRedirect: "/user/secret",
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