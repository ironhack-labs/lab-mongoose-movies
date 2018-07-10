// --- Dependencies
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const User = require('../../models/user');

// --- Config
const saltRounds = 10;

/* GET login page. */

router.get('/', (req, res, next) => {
  // Check if user is logged in
  if (req.session.currentUser) {
    return res.redirect('/');
  }
  const data = {
    messages: req.flash('login-error')
  };
  res.render('auth/login', data);
});

/* POST sign up page form */

router.post('/', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  // Check if user is already logged in
  if (req.session.currentUser) {
    return res.redirect('/');
  }

  // Check username and password params supplied
  if (!username || !password) {
    req.flash('login-error', 'Please provide a username and password');
    return res.redirect('/auth/login');
  }
  // Check user exists
  User.findOne({ username: username })
    .then(user => {
      if (!user) {
        // Username does not exist in database
        req.flash('login-error', 'User not found.');
        return res.redirect('/auth/login');
      }
      // Check that password is correct
      if (!bcrypt.compareSync(password, user.password)) {
        // Password is incorrect
        req.flash('login-error', 'Please check your password.');
        return res.redirect('/auth/login');
      }
      // User found and password correct, save session info
      req.session.currentUser = user;
      res.redirect('/');
    })
    .catch(next);
});

module.exports = router;
