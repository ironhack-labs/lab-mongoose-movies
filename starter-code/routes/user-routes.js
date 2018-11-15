const express = require('express');
const router = express.Router();



const User = require('../models/User');

const bcrypt  = require('bcryptjs');
const bcryptSalt = 10;


const passport = require('passport');


router.get('/signup', (req,res,next)=>{
  res.render('signup')
});


router.post('/signup', (req,res,next)=>{
  const theUserName = req.body.username;
  const thePassWord = req.body.password;

  if(theUserName === "" || thePassWord==="")
  {
    res.render("signup", {errorMessage: "Indicate a username and a password to sign up"});
    return;
  }

  User.findOne({username: theUserName})
  .then(user =>{
    if(user !== null){
      res.render("signup", {errorMessage: "Sorry, that username is already taken"})
      return;
    }

  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(thePassWord, salt);
  
  User.create({username: theUserName, password:hashPass})
  .then(()=>{
    res.redirect('/')
  })
  .catch((err)=>{
    next(err)
  });

  });     // End of FIND


  });    //End of POST 


router.get('/login', (req, res, next)=>{
  res.render('login' , {message: req.flash('error')});
  });


  // POST LOGIN
router.post('/login', passport.authenticate("local", {

  successRedirect: "/",
  failureRedirect: '/signup',
  failureFlash: true,
  passReqToCallback: true

}));


// (req,res,next)=>{
//     const username = req.body.username;
//     const password = req.body.password;
    

// if(username === "" || password === "")
// {
//   res.render("login" , {errorMessage: "Indicate a username and a password to login"})
//   return;
// }
// User.findOne({username:username})
// .then((user)=>{
//   if(!user)
//   {
//     res.render('login', {errorMessage: "Sorry, that username does not exist"})
//     return;
//   }
//    if(bcrypt.compareSync(password, user.password))
//    {
//      req.session.currentUser = user;
//      res.redirect("/");
//    }
//    else 
//    {  
//      res.render('login', {errorMessage : "Incorrect password"});
//    }

// })
// .catch((err)=>{
//   next(err);
// })

// });    //END OF POST 


router.get('/logout', (req,res,next)=>{

  req.logout();
  res.redirect('/login')

  // req.session.destroy((err)=>{
  //     res.redirect('/login')
  // })
  
})

router.get('/secret', (req, res, next) => {
  if(req.user){
    res.render('secret', {theUser: req.user});
  } else{
    res.redirect('/login');
  }
});




module.exports = router;