const { Router } = require('express');
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.model');
const mongoose = require('mongoose');


router.get('/signup', (req, res) => res.render('signup'));

router.post('/signup', (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      res.render('signup', { errorMessage: '!Please provide your email and password.' });
      return;
    }
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!regex.test(password)) {
      res
        .status(500)
        .render('signup', { errorMessage: 'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.' });
      return;
    }
  
    bcryptjs
      .genSalt(saltRounds)
      .then(salt => bcryptjs.hash(password, salt))
      .then(hashedPassword => {
        return User.create({
          email,
          password: hashedPassword
        });
      })
      .then(user => {
        req.session.currentUser = user;
        console.log('created user: ', user);
        res.redirect('/movies');
      })
      .catch(error => {
        if (error instanceof mongoose.Error.ValidationError) {
          res.status(500).render('signup', { errorMessage: error.message });
        } else if (error.code === 11000) {
          res.status(500).render('signup', {
            errorMessage: 'E-mail needs to be unique.'
          });
        }
        else {
          next(error);
        }
      })
  });
  
  router.get('/login', (req, res) => res.render('login'));
  
  router.post('/login', (req, res, next) => {
  
    const { email, password } = req.body;
  
    if (!email || !password) {
      res.render('login', { errorMessage: '!Please provide your email and password.' });
      return;
    }
  //console.log(req.session);
  
    User.findOne({ email })
      .then(user => {
        if (!user) {
          res.render('login', { errorMessage: 'USER  not registered.' });
          return;
        } else if (bcryptjs.compareSync(password, user.password)) {
          req.session.currentUser = user;
          console.log(`primeira vez: ${req.session.currentUser}`);
          res.redirect('/movies');
        } else {
          res.render('login', { errorMessage: 'Incorrect password.' });
        }
      })
      .catch(error => next(error));
  });
  
  router.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
  });
  
  module.exports = router;
  
