const express   = require('express');
const router    = express.Router();
const User      = require('../models/User');
const bcrypt    = require('bcryptjs');
const passport  = require('passport');

router.get('/signup', (req, res, next) => {

    res.render('users/signup');

});

router.post('/signup', (req, res, next) => {
   
    let admin = false;
    if(req.user) {
      if (req.user.isAdmin) {
        admin = req.body.role ? req.user.role : false
      }
    }
  
    let username = req.body.username;
    let password = req.body.password;

    const salt  = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    User.create({
        username: username,
        password: hash,
        isAdmin: admin
    })
    .then(()=>{
        res.redirect('/login')
    })
    .catch((err)=>{
        next(err)
    })
});

router.get('/login', (req, res, next) => {

  res.render('users/login');

});


router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));

// router.post('/logout', (req, res, next)=> {
//   req.logout();
//   res.redirect('/');
// })

router.get('/logout', (req, res, next) => {

    req.session.destroy();
    res.redirect('/');

});

router.get('/favorites', (req, res, next) => {

  if (req.session.currentUser) {
    res.render('users/favorites');
  } else {
    res.redirect('/');
  }

})

router.get('/profile', (req, res, next)=>{
  res.render('users/profile');
})

router.post('/account/delete-account', (req, res, next)=>{

  User.findByIdAndRemove(req.user._id)
  .then(()=>{
      res.redirect('/')
  })
  .catch((err)=>{
      next(err)
  })

})

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
    successRedirect: "/celeb-index",
    failureRedirect: "/" // here you would redirect to the login page using traditional login approach
  })
)

module.exports = router;