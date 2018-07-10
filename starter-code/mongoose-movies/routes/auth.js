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

  // Check username and password params supplied
  if (!username || !password) {
    // Flash an error message
    return res.redirect('/auth/signup');
  }
  // Check user exists
  User.findOne({ username: username })
    .then(user => {
      if (user) {
        // Username already exists in database.
        // Flash error
        res.redirect('/auth/signup');
      }
      // Create the user
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashed = bcrypt.hashSync(password, salt);
      const newUser = new User({ username: username, password: hashed });
      newUser.save()
        .then(() => {
          res.redirect('/');
        })
        .catch(next);
    })
    .catch(next);
});

module.exports = router;
