const express     = require('express')
const router      = express.Router();
const User        = require('../models/User')

const bcrypt     = require("bcryptjs");




router.get('/signup', (req,res,next) => {
  res.render('users/signup')
})

router.post('/signup', (req,res,next) => {

    let username = req.body.username
    let password = req.body.password
    let email = req.body.email

    const saltRounds = 10;


    const salt  = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    User.create({
      username: username,
      password: hash,
      email: email,
    }).then(data => {
      res.redirect("/user/login")

    }).catch(err => next(err))
})

router.get('/login', (req, res, next) => {
  res.render("users/login")
})

router.post('/login', (req, res, next) => {
  let username = req.body.username
  let password = req.body.password



  User.findOne({ "username": username })
  .then(user => {
      if (!user) {

        req.flash('error', `sorry, that's not the one.`)
        res.redirect('/user/login')
      }
      if (bcrypt.compareSync(password, user.password)) {
        // Save the login in the session!
        req.session.currentUser = user;
        res.redirect("/user/secret");
      }
  }).catch(error => {
    next(error);
  })
})


router.post('/logout', (req, res, next) => {
  req.session.destroy(err => {
    res.redirect('/')
  })
});







router.get('/secret', (req,res,next) => {

  if (req.session.currentUser) {
    res.render('users/secret', {theUser: req.session.currentUser})
  } else {
    res.redirect('/')
  }
})





module.exports = router;


