const express   = require('express');
const router    = express.Router();
const User      = require('../models/User');
const bcrypt    = require('bcryptjs');
const passport  = require('passport');

router.get('/signup', (req, res, next) => {

    res.render('users/signup');

});

router.post('/signup', (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    const salt  = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    User.create({
        username: username,
        password: hash
    })
    .then(()=>{
        res.redirect('/')
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

router.get('/logout', (req, res, next) => {

    req.session.destroy();
    res.redirect('/');

});

router.get('/favorites', (req, res, next) => {
  if (req.session.currentUser) {
    res.render('movies/favorites');
  } else {
    res.redirect('/');
  }

})
module.exports = router;