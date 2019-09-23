const express = require('express');
const router  = express.Router();

const User    = require('../models/User');
const bcrypt  = require('bcryptjs');

const passport = require("passport");

router.get('/signup', (req, res, next)=>{
    res.render('user-views/signup')
})

router.post('/signup', (req, res, next)=>{
    const username = req.body.theUsername;
    const password = req.body.thePassword;

    const salt  = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    User.create({
        username: username,
        password: hash
    })
    .then(()=>{
        res.redirect('/')
    })
    .catch((err)=>{
        next(err)
    })
})

router.get("/login", (req, res, next) => {
    res.render("user-views/login", { "error": req.flash("error") });
  });
  
router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
}));

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
  });

router.get('/secret', (req, res, next)=>{
    if(req.session.currentuser){
        res.render('user-views/secret', {theUser: req.session.currentuser})
    } else{
        res.redirect('/')
    }
})

router.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
      ]
    })
  );

router.get(
    "/google/callback",
    passport.authenticate("google", {
      successRedirect: "/movies",
      failureRedirect: "/" 
    })
  );

module.exports = router;