// --- Dependencies
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../../models/user');

// --- Config
const saltRounds = 10;

/* GET sign up page. */

router.get('/', (req, res, next) => {
  // Check if user is logged in
  if (req.session.currentUser) {
    return res.redirect('/');
  }
  const data = {
    messages: req.flash('signup-error')
  };
  res.render('auth/signup', data);
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
      return newUser.save()
        .then((user) => {
          req.session.currentUser = user;
          res.redirect('/');
        });
    })
    .catch(next);
});

module.exports = router;
