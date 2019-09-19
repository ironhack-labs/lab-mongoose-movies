const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { userAuth } = require('../middleware/auth')

router.get('/messages', userAuth, (req, res, next) => {
    res.render('users/messages', { user: req.user })
})

router.get('/', userAuth, (req, res, next) => {
    res.render('users/profile')
})

router.post('/delete', userAuth, (req, res, next) => {
    User.findByIdAndRemove(req.user._id)
        .then(() => {
            res.redirect('/')
        })
        .catch(e => next(e))
})

module.exports = router