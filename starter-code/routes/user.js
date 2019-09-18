const express = require('express')
const router = express.Router()
const User = require('../models/User.js')
const bcrypt = require('bcryptjs')

router.get('/signup', (req, res, next) => {
    res.render('users/signup')
})

router.post('/signup', (req, res, next) => {
    let username = req.body.username;
    let passworrd = req.body.password;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hasSync(password, salt);

    User.create({
        username: req.body.username,
        password: hash
    })
    .then (() => {
        res.redirect('/')
    })
})

module.exports = router;