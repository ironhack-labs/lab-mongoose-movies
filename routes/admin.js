const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { adminAuth } = require('../middleware/auth')


router.get('/create-new-account', adminAuth, (req, res, next) => {
    res.render('users/new')
})

router.get('/active-users', adminAuth, (req, res, next) => {
    User.find()
        .then(users => {
            res.render('users/active-users', { users: users })
        })
        .catch(err => next(err))
})

router.get('/delete/:id', adminAuth, (req, res, next) => {
    User.findByIdAndDelete(req.params.id)
        .then(result => {
            req.flash('success', `Successfully deleted user ${result}`)
            res.render('/admin/active-users')
        })
        .catch(err => next(err))
})

module.exports = router