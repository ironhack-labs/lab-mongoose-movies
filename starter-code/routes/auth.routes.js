const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.model')
const routeGuard = require('../config/route.guard')



// GET signup
router.get('/signup', (req, res) => res.render('auth-views/signup'));

//POST signup
router.post('/signup', (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.render('auth-views/signup', { errorMessage: 'All fields are mandatory. Please provide your username, email and password.' });
    return;
  }
  bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashedPassword => {
      return User.create(
        {
          username,
          email,
          passwordHash: hashedPassword
        });
    })
    .then(userFromDB => res.redirect('/userProfile'))
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).render('auth-views/signup', { errorMessage: error.message });
      } else if (error.code === 11000) {
        res.status(500).render('auth-views/signup', {
          errorMessage: 'Username and email need to be unique. Either username or email is already used.'
        });
      } else {
        next(error);
      }
    }); // close .catch()
});

//GET login
router.get('/login', (req, res) => res.render('auth-views/login'));

//POST login
router.post('/login', (req, res, next) => {

  const theUsername = req.body.username;
  const thePassword = req.body.password;

  if (theUsername === "" || thePassword === "") {
    res.render('auth-views/login', {
      errorMessage: "Please enter both, username and password to sign up."
    });
    return;
  }
  User.findOne({ "username": theUsername })
    .then(user => {
      if (!user) {
        res.render('auth-views/login', {
          errorMessage: "The username doesn't exist."
        });
        return;
      }
      if (bcryptjs.compareSync(thePassword, user.passwordHash)) {
        // Save the login in the session!
        req.session.currentUser = user;
        res.redirect("/userProfile");
      } else {
        res.render('auth-views/login', {
          errorMessage: "Incorrect password"
        });
      }
    })
    .catch(error => {
      next(error);
    });
});

//GET user profile
router.get('/userProfile', routeGuard, (req, res) => res.render('users-views/userProfile'));

//  POST LOGOUT
router.post('/logout', routeGuard, (req, res) => {
  req.session.destroy();
  res.redirect('/');
});



module.exports = router;