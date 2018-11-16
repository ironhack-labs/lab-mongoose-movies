const express  = require('express');
const router   = express.Router();
const User     = require('../models/User');
const bcrypt   = require('bcryptjs');
const passport = require('passport');
//const Book     = require('../models/Book');





router.get('/signup', (req, res, next) => {
  res.render('signup', { message: req.flash('error') });
});

router.post('/signup', (req, res, next) => {
  User.findOne({ username: req.body.username })
    .then((theUser) => {

      if (theUser !== null) {
        req.flash('error', 'sorry, that username is taken');
        // this is essentially equal to req.flash.error = 'sorry that username is taken'
        res.redirect('/signup')
      }

      const salt = bcrypt.genSaltSync(10);
      const theHash = bcrypt.hashSync(req.body.thePassword, salt);

      User.create({
        username: req.body.theUsername,
        password: theHash,
      
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
      });
      
       
        .then((theUser) => {
          req.login(theUser, (err) => {
            if (err) {
              req.flash('error', 'something went wrong with auto login, please log in manually')
              res.redirect('/login')
              return;
            }

            res.redirect('/private');
          });
        })
        .catch((err) => {
          next(err);
        })
    })
    .catch((err) => {
      next(err);
    })
});
