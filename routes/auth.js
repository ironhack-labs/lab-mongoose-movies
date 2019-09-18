const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();
const passport = require('passport')


router.get('/signup', (req, res, next) => {
    res.render('users/signup')
});

router.post('/signup', (req, res, next) => {
    const salt = bcrypt.genSaltSync(10)
    req.body.password = bcrypt.hashSync(req.body.password, salt)

    User.create(req.body)
        .then(user => {
            req.session.currentUser = user
            req.flash('loginStatus', 'Logged in!');
            res.status(201).redirect('/')
        })
        .catch(e => res.status(500).send(e))
});

router.get('/login', (req, res, next) => {
    res.render('users/login')
})

router.post('/login', passport.authenticate("local", {
    successRedirect: '/',
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
}));

router.post('/logout', (req, res, next) => {
    req.flash('success', 'Logged in!');
    req.logout();
    res.redirect('/');
})

router.get('/messages', (req, res, next) => {
    if (req.session.currentUser) res.render('users/secret', { user: req.session.currentUser })
    req.flash('failure', 'Must be logged in to do that...');
    res.redirect('/')
})

module.exports = router