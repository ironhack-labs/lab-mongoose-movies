// --- Dependencies
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const User = require('../models/user');

// --- Config
const saltRounds = 10;

/* GET sign up page. */

router.get('/signup', (req, res, next) => {
  res.render('auth/signup');
});

/* POST sign up page form */

router.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  // Check if user is already logged in
  if (req.session.currentUser) {
    return res.redirect('/');
  }

  // Check username and password params supplied
  if (!username || !password) {
    req.flash('signup-error', 'Please provide a username and password');
    return res.redirect('/auth/signup');
  }
  // Check user exists
  User.findOne({ username: username })
    .then(user => {
      if (user) {
        // Username already exists in database.
        req.flash('signup-error', 'Username already exists.');
        return res.redirect('/auth/signup');
      }
      // Create the user
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashed = bcrypt.hashSync(password, salt);
      const newUser = new User({ username: username, password: hashed });
      newUser.save()
        .then((user) => {
          req.session.currentUser = user;
          res.redirect('/');
        })
        .catch(next);
    })
    .catch(next);
});

module.exports = router;
