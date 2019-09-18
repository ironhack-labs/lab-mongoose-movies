const express = require('express')
const router = express.Router()
const User = require('../models/User.js')
const bcrypt = require('bcryptjs')

router.get('/signup', (req, res, next) => {
    res.render('users/signup')
})

router.post('/signup', (req, res, next) => {

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    User.create({
            username: req.body.username,
            password: hash
        })
        .then((user) => {
            req.session.currentUser = user
            
            console.log(req.session.currentUser)
            res.redirect('/')
        })
        .catch((e) => {
            errorMessage = e
        })
})

router.get('/login', (req, res, next) => {
    res.render('users/login')
})

router.post('/login', (req, res, next) => {

    User.findOne({
            username: req.body.username
        })
        .then((user) => {
            if (!user) {
                console.log('this is the logged in user', user)
                res.redirect('/')
            }
            if (bcrypt.compareSync(req.body.password, user.password)) {
                req.session.currentUser = user
                res.redirect('/')
            } else {
                res.render('users/login', {
                    errorMessage: "Incorrect password"
                })
            }
        })
        .catch((e) => {
            errorMessage = e
        })
})

router.get("/logout", (req, res, next) => {
    req.session.destroy((err) => {
      res.redirect("/login");
    });
  });

router.get('/secret', (req, res, next) => {
    
    console.log(req.session.currentUser)

    if (req.session.currentUser) {
        res.render('users/secret')
    } else {
        res.redirect('/')
    }
})

module.exports = router;