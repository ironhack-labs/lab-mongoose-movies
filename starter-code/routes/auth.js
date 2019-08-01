const express = require('express');
const router  = express.Router();
const Celeb = require('../model/Celebrity');
const Movie = require('../model/Movies')
const User  = require("../model/user");
const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);
const zxcvbn = require('zxcvbn');
const flash      = require("connect-flash");
const passport   = require("passport");
const localStrategy = require ("passport-local").Strategy;
const ensureLogin = require("connect-ensure-login");



//Password Ecryption
// BCrypt to encrypt passwords
const bcrypt         = require("bcryptjs");
const bcryptSalt     = 10;

router.get('/signup',(req,res,next)=>{
  res.render('auth/signup');
})

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const salt     = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

User.findOne({ "username": username })
.then(user => {
  if (user !== null) {
      res.render("auth/signup", {
        errorMessage: "The username already exists!"
      });
    }

  })
      // .then(()=>{
      //   res.render("auth/signup", {passdata})
      // })

  User.create({
    username,
    password: hashPass
  })
    .then((user) => {
      if (user !== null) {
          res.render("auth/signup", {
            errorMessage: "The username already exists!"
          })
      }
  })

  .then(() => {
    if (username =='' || password =='') {
      res.render("auth/signup", {
        errorMessage: "Indicate a username and a password to sign up"
      })
     } else{

        res.redirect("/");
      }
  })

  .catch(error => {
    console.log(error);
  })
  .catch(err => {
    console.log(err);
   })
   
  // .catch(erro => {
  //   console.log(erro);
  // })

});


//login Passport Style

router.get('/login', (req, res, next)=>{
  res.render('auth/login',{ "message": req.flash("error") })
})

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));



//Logout PassPort Style
router.post('/logout', (req, res, next)=>{
  req.flash('success', "You Have Been Logged Out");

  req.logout();
  res.redirect("/login");
})

//Google Login
router.get("/auth/google", passport.authenticate("google", {
  scope: ["https://www.googleapis.com/auth/plus.login",
          "https://www.googleapis.com/auth/plus.profile.emails.read"]
}));

router.get("/auth/google/callback", passport.authenticate("google", {
  failureRedirect: "/login",
  successRedirect: "/"
}));




// router.get('/login',(req,res,next)=>{
//   if(req.session.errorCount <= 0){
//     req.session.errorMessage = null;
// }
// req.session.errorCount -=1;
// // you can do this in every single route manually, 
// // or you can make your own middleware function and call that function in all the routes
// // or you can use flash messages


// res.render('auth/login', {error: req.session.errorMessage})
// })


// router.post("/login", (req, res, next) => {
//   const theUsername = req.body.username;
//   const thePassword = req.body.password;

//   if (theUsername === "" || thePassword === "") {
//     res.render("auth/login", {
//       errorMessage: "Please enter both, username and password to sign up."
//     });
//   }

//   User.findOne({ "username": theUsername })
//   .then(user => {
//       if (!user) {
//         req.session.errorMessage = "sorry, no one with that username found";
//         req.session.errorCount = 1
//         res.redirect('/auth/login');
        
//       }
//       if (bcrypt.compareSync(thePassword, user.password)) {
//         // Save the login in the session!
//         req.session.currentUser = user;
//        // console.log(req.session.currentUser)
//         res.redirect("/movies");
//       } else {
        
//         req.session.errorMessage = 'incorrect Username or Password';
//         req.session.errorCount = 1;
//         res.redirect('/auth/login');
        
//       }
//   })
//   .catch(err => {
//     console.log(err);
//   })


// });

// router.get("/logout", (req, res, next) => {
//   req.session.destroy((err) => {
  
//     res.redirect("/login");
//   });
// });

module.exports = router;
