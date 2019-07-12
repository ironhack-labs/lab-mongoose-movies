const express = require('express');
const router  = express.Router();
const Celeb = require('../model/Celebrity');
const Movie = require('../model/Movies')
const User  = require("../model/user");
const Upload    = require("../model/Fileupload");
const uploadCloud = require('../config/cloudinary.js');
const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash      = require("connect-flash");
const passport   = require("passport");
const ensureLogin = require("connect-ensure-login");


//Passport Profile
router.get('/profile',ensureLogin.ensureLoggedIn("/login"), (req, res, next) => {
  User.find()
  .then((images)=>{
    let data = {
      photos:images
    }
    console.log(req.user);
    res.render('profile',{data, user: req.user});
  })
  .catch((err)=>{
    next(err);
})
 
});

//Upload Page
router.get('/profileUpload',ensureLogin.ensureLoggedIn("/login"), (req, res, next) => {

  res.render('profileUpload');
});


//Upload Action
router.post('/imgcreate', uploadCloud.single('photo') ,(req, res, next)=>{

  let imgName = req.body.imgName;
  let description = req.body.description;
  let imgPath = req.file.url


  User.findByIdAndUpdate(req.user._id,{
      imgName: imgName,
      description: description,
      imgPath: imgPath
  })
  .then((images)=>{
      res.redirect('/profile')
  })
  .catch((err)=>{
      next(err);
  })



})










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
