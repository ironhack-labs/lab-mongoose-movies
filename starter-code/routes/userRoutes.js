const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const bcrypt  = require('bcryptjs');

const passport = require('passport');

const ensureLogin = require("connect-ensure-login");


router.get('/signup', (req, res, next)=>{
    res.render('user-views/signup');
})

// even though these look like the same route, theyre different routes becase one is get and one is post
router.post('/signup', (req, res, next)=>{

    const thePassword = req.body.password;
    const theUsername = req.body.username;

    const salt = bcrypt.genSaltSync(12);
    const hashedPassWord =  bcrypt.hashSync(thePassword, salt);

    if(thePassword && theUsername){
    User.create({
        username: theUsername,
        password: hashedPassWord
    })
    .then((newUser)=>{
        req.session.currentUser = newUser;
        console.log('yay');
        res.redirect('/homepage')
    })
    .catch((err)=>{
        next(err);
    })
    } else {
        req.flash('error', 'Please provide all information!')
        res.redirect('/login');
    }   
})



router.get('/login', (req, res, next)=>{
    // if(req.session.errorCount <= 0){
    //     req.session.errorMessage = null;
    // }
    // req.session.errorCount -=1;
    // you can do this in every single route manually, 
    // or you can make your own middleware function and call that function in all the routes
    // or you can use flash messages
    res.render('user-views/login') //{error: req.session.errorMessage}
})



router.post("/login", passport.authenticate("local", {
    successRedirect: "/homepage",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
  }));

// router.post('/login', (req, res, next)=>{

//     const password = req.body.thePassword;
//     const username = req.body.theUsername;


// User.findOne({ "username": username })
//   .then(user => {
//       if (!user) {
//           // req.session.errorMessage = "sorry, no one with that username found";
//           // req.session.errorCount = 1
//           res.redirect('/login');

//       }
//       if (bcrypt.compareSync(password, user.password)) {

//         req.session.currentUser = user;
//         res.redirect('/homepage');

//       } else {

//         // req.session.errorMessage = 'wrong password';
//         // req.session.errorCount = 1;
//         res.redirect('/login');
//       }
//   })
//   .catch(error => {
//     next(error);
//   })

// })


router.get("/homepage", ensureLogin.ensureLoggedIn(), (req, res) => {
    res.render("user-views/homepage", { user: req.user });
  });


// router.get('/homepage', (req, res, next)=>{

//     // console.log("-------- ", req.session)

//     // if(req.session.currentUser){
//     if(req.user){  ******instead of req.session.currentuser, passport gives you req.user!!!!!!*******

//         res.render('user-views/homepage', {user: req.session.currentUser})

//     } else {
//         // req.session.errorCount = 1;
//         // req.session.errorMessage = "Sorry, you must be logged in to use that feature please log in"
//         res.redirect('/login')
//     }
// })

router.post('/logout', (req, res, next)=>{

    // req.session.destroy()
    req.logout();
    req.flash('error', ('Sucessfully logged out'))
    res.redirect('/')

})




module.exports = router;