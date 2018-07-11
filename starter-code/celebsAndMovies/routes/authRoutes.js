const express = require('express');
const userRouter = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const passport        = require("passport");


userRouter.get('/authRoutes/signup', (req, res, nex) => {
  res.render('userViews/signupPage');
})


userRouter.post('/authRoutes/signup', (req, res, nex) => {
  const thePassword = req.body.thePassword;
  const theUsername = req.body.theUsername;
  if (theUsername === "" || thePassword === "") {
    res.render('userViews/signupPage', { errorMessage: "Indicate a username and a password to sign up" });
    return;
  }
  User.findOne({ 'username': theUsername })
    .then((responseFromBD) => {
      console.log(responseFromBD);
      if (responseFromBD !== null) {
        res.render('userViews/signupPage', { errorMessage: `Sorry ${theUsername} is taken` });
        return;
      } //ends the if statement
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(thePassword, salt);
      User.create({ username: theUsername, password: hashedPassword })
        .then((response) => {
          res.redirect('/');
        })
        .catch((err) => {
          next(err);
        })
    }) //end the .then form the user.findone
}) //ends the route


userRouter.get('/authRoutes/login',(req,res,next)=>{
  res.render('userViews/loginPage',{ "message": req.flash("error")});
})

userRouter.post("/authRoutes/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/authRoutes/login",
  failureFlash: true,
  passReqToCallback: true
}));

// CON PASSPORT WE DONT NEED THIS ANYMORE
// userRouter.get('/authRoutes/logout',(req,res,next)=>{
//   req.session.destroy((err) => {
//     // cannot access session here
//     res.redirect("/authRoutes/login");
//   });
// });

userRouter.get('/authRoutes/logout',(req,res,next)=>{
  req.logout();
  res.redirect("/authRoutes/login")
});

module.exports = userRouter