
const express = require('express');
const router = express.Router();
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");


/* GET signup  page */
router.get('/signup', (req, res, next) => {
  res.render('auth/signup');
});


// User model
const User = require("../models/User");


// BCrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


//-------- sign up function
router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;


  //----------- validate that both fields are correctly filled up
  if (username === "" || password === "") {
    res.render("auth/signup", {
      errorMessage: "Indicate a username and a password to sign up"
    });
    return;
  }

  //--------- check  if the indicated username is already defined
  User.findOne({ username: username })
    .then(user => {
      if (user !== null) {
        res.render("auth/signup", {
          errorMessage: "The username already exists"
        });
        return;
      }


  //------------------- continue after validations
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = User({
        username,
        password: hashPass
      });

      newUser.save().then(user => {
        res.redirect("/");
      });
    })
    .catch(error => {
      next(error);
    });

}); //--------- End sing up function



/* GET login  page */
router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

//-------- Log In function
router.post("/login", passport.authenticate("local", {
  successRedirect: "/celebrities/the-new-window",
  successFlash: true,
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));


//-------- old methed before pasport ----------
// router.post("/login", (req, res, next) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (username === "" || password === "") {
//     res.render("auth/login", {
//       errorMessage: "Indicate a username and a password to sign up"
//     });
//     return;
//   }


//   User.findOne({ "username": username })
//   .then(user => {
//       if (!user) {
//         res.render("auth/login", {
//           errorMessage: "The username doesn't exist"
//         });
//         return;
//       }
//       if (bcrypt.compareSync(password, user.password)) {
//         // Save the login in the session!
//         req.session.currentUser = user;
//         res.redirect("/");
//       } else {
//         res.render("auth/login", {
//           errorMessage: "Incorrect password"
//         });
//       }
//   })
//   .catch(error => {
//     next(error)
//   })
// });//-------- End Log In function

//-------- End old methed before pasport ----------




//---------  logout
router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    // cannot access session here
    res.redirect("/login");
  });
});



module.exports = router;
