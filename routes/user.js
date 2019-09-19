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
            req.flash('success', 'Your user entry was successfully deleted.')
            res.redirect('/')
        })
        .catch(e => {
            req.flash('failure', 'Your user entry was not deleted due to an error.')
            next(e)
        })
})

module.exports = router