const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();
const passport = require('passport')
const { userAuth } = require('../middleware/auth')


router.get('/signup', (req, res, next) => {
    res.render('users/signup')
});

router.post('/signup', (req, res, next) => {
    const salt = bcrypt.genSaltSync(10)
    const userData = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, salt),
        role: (req.user && req.user.role === "Admin") ? req.body.role : "User"
    }

    User.create(userData)
        .then(user => {
            req.session.currentUser = user
            req.logIn(user, (err) => {
                if (!err) {
                    res.status(201).redirect('/')
                    req.flash('success', 'Registered and logged in!');
                } else next(err)
            })
        })
        .catch(e => res.status(500).send(e))
});

router.get('/login', (req, res, next) => {
    res.render('users/login')
})

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            req.flash('failure', `${info.message}`);
            return next(err);
        }
        if (!user) {
            req.flash('failure', `${info.message}`);
            return res.redirect('/login');
        }
        req.logIn(user, function(err) {
            if (err) {
                req.flash('failure', `${info.message}`);
                return next(err);
            }
            req.flash('success', 'Successfully logged in!');
            return res.redirect('/');
        });
    })(req, res, next);
});

router.post('/logout', userAuth, (req, res, next) => {
    req.flash('success', 'Logged out!');
    req.logout();
    res.redirect('/');
})

module.exports = router