const express = require('express');
const router  = express.Router();
const ensureLogin = require("connect-ensure-login");
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const passport = require('passport');

router.post("/auth-route", passport.authenticate("local", {
  successRedirect: "/user-profile",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));

// router.post("/auth-route", (req, res, next)=>{
//   User.findOne({username: req.body.username})
//   .then((data)=>{
//     const passHashed = bcrypt.compareSync(req.body.password, data.password);
//     console.log(passHashed);
//     if(passHashed){
//       res.render('user-profile', {user: });
//     }else{
//       res.redirect('/login');
//     }
//   })
//   .catch((err)=>{
//     console.log(err);
//   });
// });

module.exports = router;