const express = require("express");
const router = express.Router();


const User = require('../models/User');
// BCrypt to encrypt passwords
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;

router.get("/", (req, res, next) => {
  res.render("/");
});


router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

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



router.get("/secretviews/secret", (req, res, next) => {
  if(req.session.currentUser) {
    res.render("secretviews/secret");
  } else {
    res.redirect("/login");
  }
});
module.exports = router;