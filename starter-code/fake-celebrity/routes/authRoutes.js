const express = require('express');
const router = express.Router();
const User = require('../models/user')
const bcrypt         = require("bcryptjs");
const bcryptSalt     = 10;
const passport = require('passport');


router.get('/signup',(req, res, next)=>{
  res.render('userViews/signup')
})

router.post('/signup', (req, res, next)=>{
  const username = req.body.username
  const password = req.body.password

  if (username === "" || password === "") {
    console.log("carajo1");
       res.render("userViews/signup", {
         errorMessage: "Indicate a username and a password to sign up"
       });
       return;
     }
     //
     User.findOne({"username": username})
     .then((user)=>{
       if(user !== null){
         errorMessage: "sorry, that username already exists"
       }
     })

    const saltRounds = 10;
    const thePassword = req.body.password;
    const salt  = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(thePassword, salt);

    User.create({
      username: req.body.username,
      password: hash
    })
    .then((result)=>{
      res.redirect('/movies/index')
    })
    .catch((err)=>{
      next(err)
    })

})

router.get('/login', (req, res, next)=>{
  res.render("userViews/login",  {message: req.flash('error')})
})



router.post('/login', passport.authenticate('local', {
  successRedirect: "/movies/index",
  failureRedirect: "/login",
  failureFlash: true,
  successFlash: true,
  passReqToCallback: true
}));


// router.post('/login', (req, res, next)=>{
//   console.log("carajo")
//
//   const username = req.body.username
//   const password = req.body.password
//
//   if(username === "" || password === ""){
//       console.log("carajo")
//     res.render('userViews/login', {
//       errorMessage: "Oops, it look like you left one or more of the files blank, please fill in your username and password"
//     })
//     return
//   }
//
//   User.findOne({"username": username})
//   .then((user)=>{
//     if(!user){
//       res.render("userViews/login", {
//         errorMessage: "This user does not exist"
//       })
//       return
//     }
//     if(bcrypt.compareSync(password, user.password)){
//       req.session.currentUser = user
//       res.redirect('/')
//     }else{
//       res.render("userViews/login", {
//         errorMessage: "Incorreect password"
//       })
//     }
//   })
//   .catch(error =>{
//     next(error)
//   })
//
  router.get('/logout', (req, res, next)=>{
    req.logout()
    res.redirect('/login')
    })
  // })
//
// })

module.exports = router;
