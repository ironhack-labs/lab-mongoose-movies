const express = require('express');
const router = express.Router();
const User = require('../models/user');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const bcrypt = require('bcryptjs');
const passport = require('passport');



router.get('/signup', (req, res, next) => {
    res.render('users/signup');
})


router.post('/signup', (req, res, next) => {

    let admin = false;

    //check if logged in user is an admin
    if(req.user){
        if(req.user.isAdmin){
            admin = req.body.role? req.body.role : false
            //if req.body.role is true then it is equal to admin, otherwise admin is false
        }
    }

    const username = req.body.theUsername;
    const password = req.body.thePassword;
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const newUser = {
        username: username,
        password: hashPassword,
        isAdmin: admin
    }

    User.create(newUser)
        .then((data) => {
            res.redirect('/')
        })
        .catch((err) => {
            next(err);
        })
})


router.get('/login', (req, res, next) => {
    res.render('users/login');
})





router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/login",
    failureFlash: true,
    passReqToCallback: true
}));




// router.post('/login', (req, res, next) => {

//     const username = req.body.theUsername;
//     const password = req.body.thePassword;

//     User.findOne({ username: username })
//         .then((userFromDB) => {

//             if (!userFromDB) {


//                 req.flash('error', 'sorry this username does not exist');

//                 res.redirect('/users/login');
//             }

//             if (bcrypt.compareSync(password, userFromDB.password)) {
//                 // Save the login in the session!
//                 req.session.currentUser = userFromDB;
//                 // this is the magic ^ line of code that actually logs you in
//                 res.redirect("/");
//             }
//             else {
//                 req.flash('error', 'incorrect password');
//                 res.redirect('/users/login')
//             }
//         })
//         .catch((err) => {
//             next(err);
//         })
// })




router.post('/logout', (req, res, next) => {


    req.logout();
    // passport has its own req.logout method for you because req.session.destroy() just wasn't easy enough

    res.redirect('/');



    // req.session.destroy();

    // res.redirect('/');

})







router.get('/secret', (req, res, next)=>{

    if(req.user){
        res.render('users/secret', {theUser: req.user})
    } else{
        res.redirect('/')
    }
})



// router.get('/secret', (req, res, next) => {

//     if (req.session.currentUser) {
//         res.render('users/secret', { theUser: req.session.currentUser })
//     }
//     else {
//         res.redirect('/')
//     }

// })


router.get('/profile', (req, res, next)=>{
    res.render('users/profile');
})

router.post('/account/delete-my-account', (req, res, next)=>{

    User.findByIdAndRemove(req.user._id)
    .then(()=>{
        res.redirect('/')
    })
    .catch((err)=>{
        next(err)
    })

})









// router.get('/create-new-account', (req, res, next) =>{
//     if(!req.user){
//         req.flash('error, you must login to see this page');
//         req.redirect('/login');
//     }

//     if(!req.user.isAdmin){
//         req.flasj('error', 'you do not have access to this feature')
//         req.redirect('/')
//     }

//     res.render('users/new-account');
// })







// routes/auth-routes.js

router.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
      ]
    })
  );


  router.get(
    "/google/callback",
    passport.authenticate("google", {
      successRedirect: "/",
      failureRedirect: "/users/login" // here you would redirect to the login page using traditional login approach
    })
  );




module.exports = router;