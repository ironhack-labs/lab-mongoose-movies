const express = require('express');
const router  = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const checkLogin = require('../middleware/checkLogin')


router.get('/signup', (req, res, next) => {
  res.render('auth/signup')
})

router.post('/signup', (req, res, next)=> {
  const { username, email, password} = req.body

  if (!username || !password || !email) {
    res.render('auth/signup', { errorMessage: 'All fields are mandatory. Please provide your username and password.' });
    return;
  }

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
      res
      .status(500)
      .render('auth/signup', { errorMessage: 'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.' });
      return;
  }

  bcrypt.hash(password, 10)
  .then(hashedPassword => {
      return User.create({ 
          username, 
          email,
          password: hashedPassword
      })
  })
  .then(newUserInDB=> {
      console.log('Newly created user is: ', newUserInDB)
      res.redirect('/auth/user-profile')
  })
  .catch(err => {
      if (err.code === 11000) {
          res.status(500).render('auth/signup', {
              errorMessage: 'Username and email need to be unique, this username or email is already used. Try again.'
          })
      } else {
          next (err)
      }
  })
})


router.get('/login', (req, res, next) => {
  res.render('auth/login')
})

router.post('/login', (req, res, next) => {
  console.log('SESSION =====> ', req.session);
  const { username, email, password} = req.body



  if (username === '' || password === '' || email === '') {
      res.render('auth/login', {
          errorMessage: 'Please enter username, email and password to login. '
      })
      return
  }

  let currentUser

  User.findOne( {username})
      .then(user => {
  
          if(!user) {
              res.render('auth/login', { errorMessage: 'Username is not registered. Try with other username.'})
              return
          } else if (bcrypt.compare(password, user.password)) {
              // res.render('auth/user-profile',  {user} )
              req.session.currentUser = user
     
              res.redirect('/auth/user-profile')
          } else {
              res.render('auth/login', { errorMessage: 'Incorrect password'})
          }
      })
      .catch(err => {next(err)})
})

router.get('/user-profile', (req, res, next) => {
  console.log(req.session.currentUser)
  res.render('users/user-profile', { userInSession: req.session.currentUser });
});

router.get('/user-profile', 
checkLogin,
(req, res, next ) => {
    res.render('users/user-profile')
})

router.post('/logout', (req, res, next) => {
    req.session.destroy()
    res.redirect('/')
})


module.exports = router

