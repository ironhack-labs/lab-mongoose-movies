const express = require("express");
const router = express.Router();
const passport = require("passport");

const ensureLogin = require("connect-ensure-login");

const User = require('../models/User');
// BCrypt to encrypt passwords
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;

router.get("/", (req, res, next) => {
  res.render("/");
});


router.get("/login", (req, res, next) => {
  // res.render("auth/login");
  res.render("auth/login", {"message": req.flash("error"), "msg": req.flash("success") });
//"msg": req.flash("info")
  
});

  router.post("/login", passport.authenticate("local", {
  successRedirect: "/secretviews/secret",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true

} ));

router.get("/auth/google", passport.authenticate("google", {
  scope: ["https://www.googleapis.com/auth/plus.login",
          "https://www.googleapis.com/auth/userinfo.email"
      ]
}));


router.get("/auth/google/callback", passport.authenticate("google", {
  failureRedirect: "/",
  successRedirect: "/secretviews/secret"
}));

/*
router.post('/login', (req, res, next)=>{
console.log('test');
  const password = req.body.password;
  const username = req.body.username;

User.findOne({ "username": username })
.then(user => {
    if (!user) {
      console.log("user not in DB");
        // req.session.errorMessage = "sorry, no one with that username found";
        // req.session.errorCount = 1
        res.redirect('/login');
 
    }
    if (bcrypt.compareSync(password, user.password)) {

      req.session.currentUser = user;
      console.log('req session:  ' + req.session);
      res.redirect('secretviews/secret');
    } else {

      // req.session.errorMessage = 'wrong password';
      // req.session.errorCount = 1;
      console.log("wrong password...")
      res.redirect('/login');
    }
})
.catch(error => {
  next(error);
})


})
*/

/*
router.get("/secretviews/secret", (req, res, next) => {
  // if(req.session.currentUser) {
    if(req.user) {
    res.render("secretviews/secret");
  } else {
    res.redirect("/login");
  }
});
*/

router.get("/secretviews/secret", ensureLogin.ensureLoggedIn(), (req, res) => {
  
  res.render("secretviews/secret", { user: req.user });
});
module.exports = router;