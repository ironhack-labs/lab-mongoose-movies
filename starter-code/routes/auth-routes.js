const { Router } = require('express');
const router = new Router();
const User = require('../models/User-model');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

router.get('/signup', (req, res) => res.render('auth/signup'));

router.post('/signup', (req, res, render) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.render('auth/signup', { errorMessage: 'All fields are mandatory. Please provide your username, email and password!' });
    return;
  };

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res.status(500).render('auth/signup', { errorMessage: 'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.' });
    return;
  };

  bcrypt.genSalt(saltRounds)
    .then(salt => bcrypt.hash(password, salt))
    .then(hashedPassword => {
      return User.create({
        username,
        email,
        passwordHash: hashedPassword
      });
    })
    .then(userFromDB => {
      console.log('Newly created user is: ', userFromDB);
      res.redirect('/userProfile');
    })
    .catch(err => {
      if (err instanceof mongoose.Error.ValidationError) {
        res.status(500).render('auth/signup', { errorMessage: err.message });
      } else if (err.code === 11000) {
        res.status(500).render('auth/signup', {
          errorMessage: 'Username and email need to be unique. Either username or email is already used.'
        });
      } else {
        next(err);
      }
    });
});

router.get('/login', (req, res) => res.render('auth/login'));

router.post('/login', (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.render('auth/login', { errorMessage: 'Please enter with your username, email and password to login!' });
    return;
  }

  User.findOne({ $and: [{ username }, { email }] })
    .then(user => {
      if (!user) {
        res.render('auth/login', { errorMessage: 'Email is not registered. Try with other email.' });
        return;
      } else if (bcrypt.compareSync(password, user.passwordHash)) {
        res.render('users/user-profile', { user });
        req.session.currentUser = user;
        res.redirect('/userProfile');
      } else {
        res.render('auth/login', { errorMessage: 'Incorrect password' });
      }
    })
    .catch(err => next(err));
});

router.get('/userProfile', (req, res) => {
  res.render('users/user-profile', { userInsession: req.session.currentUser });
});

module.exports = router;