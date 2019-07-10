const express = require('express');
const router  = express.Router();
const Celeb = require('../model/Celebrity');
const Movie = require('../model/Movies')
const User  = require("../model/user");
const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash      = require("connect-flash");
const passport   = require("passport");
const ensureLogin = require("connect-ensure-login");


//Passport Profile
router.get('/profile',ensureLogin.ensureLoggedIn("/login"), (req, res, next) => {
  let data = req.user;
  res.render('profile',{data});
});






//For session Login
// router.use((req, res, next) => {
//     if (req.session.currentUser) { 
//       next(); 
//     } else {                          
//       res.redirect("/login");        
//     }                              
//   });  

//   router.get('/profile', (req, res, next)=>{
//     if(req.session.currentUser){

//         res.render('profile', {user: req.session.currentUser})
//         //console.log({user: req.session.currentUser})

//     } else {
//         req.session.errorCount = 1;
//         req.session.errorMessage = "Sorry, you must be logged in to use that feature please log in"
//         res.redirect('auth/login')
//     }
//   })

module.exports = router;
