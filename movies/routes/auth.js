const express = require('express');
const router = express.Router();
const message = require('../messages.js');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const {
  error: {
    empty,
    userExist,
    userNotExist,
    notEquals,
    alreadyExists
  },
  info: {
    userCreationOk,
  },
} = message;

router.post('/login', function(req, res, next) {
  const { username, password } = req.body;
  if (!username || !password)
  {
    console.log(empty);
    req.flash('error', empty)
    res.redirect(req.session.currentPage.alternative);
  }
  else
  {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);
    User.findOne({ username })
    .then(user => {
      if(!user)
      {
        console.log(userNotExist);
        req.flash('error', userNotExist);
        res.redirect(req.session.currentPage.alternative);
      }
      else
      {
        if(bcrypt.compareSync(password, user.password))
        {
          req.session.currentUser = user;
          res.redirect(req.session.currentPage.origin);
        }
        else
        {
          delete req.session.currentUser;
          res.redirect(req.session.currentPage.alternative);
        }
      }
    })
    .catch(error => next(error));
  }
});

router.post('/signup', function(req, res, next) {
  const { username, password, repeat } = req.body;
  if (!username || !password || !repeat)
  {
    console.log(empty);
    req.flash('error', empty)
    res.redirect(req.session.currentPage.alternative);
  }
  else if(password != repeat)
  {
    console.log(notEquals);
    req.flash('error', notEquals);
    res.redirect(req.session.currentPage.alternative);
  }
  else
  {
    User.findOne({ username })
    .then(user => {
      if(user)
      {
        console.log(alreadyExists);
        req.flash('error', alreadyExists);
        res.redirect(req.session.currentPage.alternative);
      }
      else
      {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);
        newUser = new User({ username, password: hashedPassword });
        newUser.save()
        .then((newCreatedUser) => {
          req.flash('info', userCreationOk);
          req.session.currentUser = newCreatedUser;
          res.redirect(req.session.currentPage.origin);
        })
        .catch(error => next(error));
      }
    })
    .catch(error => next(error));
  }
});

router.post('/logout', (req, res, next) => {
  delete req.session.currentUser;
  res.redirect(req.session.currentPage.alternative);
});

module.exports = router;
