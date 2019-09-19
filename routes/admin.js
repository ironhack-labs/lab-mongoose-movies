const express = require('express');
const router = express.Router();
const User = require('../models/User')


const checkIfAdmin = (req, res, next) => {
    if (!req.user) {
        req.flash('failure', 'please log in to use this feature')
        res.redirect('/login')
    }
    if (!req.user.isAdmin) {
        req.flash('failure', 'you do not have access to this feature')
        res.redirect('/')
    }
    next()
}
router.get('/create-new-account', checkIfAdmin, (req, res, next) => {
    res.render('users/new')
})

router.get('/active-users', checkIfAdmin, (req, res, next) => {
    User.find()
        .then(users => {
            res.render('users/active-users', { users: users })
        })
        .catch(err => next(err))
})

router.get('/delete/:id', checkIfAdmin, (req, res, next) => {
    User.findByIdAndDelete(req.params.id)
        .then(result => {
            req.flash('success', `Successfully deleted user ${result}`)
            res.render('/admin/active-users')
        })
        .catch(err => next(err))
})

module.exports = router