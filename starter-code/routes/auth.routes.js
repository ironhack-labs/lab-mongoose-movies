const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const bcryptjs = require('bcryptjs')
const saltRounds = 10

const User = require('../models/user.model')

router.get('/signup', (req, res, next) => {
  res.render('auth/signup')
})

router.post('/signup', async (req, res, next) => {
  const {username, email, password} = req.body

  if(!username || !email || !password) {
    await res.render('auth/signup', {errorMessage: 'All fields are mandatory.'})
    return; 
  } 

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

  if(!regex.test(password)) {
    await res.status(500).render('auth/signup', {errorMessage: 'Password must have at least 6 chars, at least one number, one lowercase and one uppercase letter'})
    return;
  }

  try{

    const genResult = await bcryptjs.genSalt(saltRounds)
    const passwordHash = await bcryptjs.hashSync(password, genResult)

    const newUser = await User.create({
      username, email, passwordHash 
    })

    await res.redirect('/userProfile')

  } catch(eror) {
      if(error.instanceof.mongoose.Error.ValidationError) {
        await  res.status(500).render('auth/signup', {errorMessage: "Email's invalid format"})

      } else if(error.code === 11000) {
        await  res.status(500).render('auth/signup', {errorMessage: "Username and email need to be unique. Try again."})

      } else{
        await next(error)
      }
  }
});

router.get('/userProfile', (req, res) => {
  res.render('users/user-profile', {userInSession: req.session.currentUser})
});

router.get('/login', (req, res) => {
  res.render('auth/login')
});

router.post('/login', async (req, res, next) => {
  const {email, password} = req.body;
  console.log('SESSION ===> ', req.session)

  if(email === '' || password === '') {
    await res.render('auth/login', {errorMessage: 'Please enter both, email and password to login.'})
    return;
  }

  try{

    const user = await User.findOne({email});

    if(!user) {
      await res.render('auth/login', {errorMessage: 'Email is not registered. Try another email.'});
      return;
    } else if(bcryptjs.compareSync(password, user.passwordHash)) {
       req.session.currentUser = user;
       res.redirect('/userProfile');
    } else {
      await res.render('auth/login', {errorMessage: 'Incorrect password'})
  }
  } catch(error) {
    next(error)
  }
})

router.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router