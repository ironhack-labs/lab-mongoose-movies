const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

router.get('/messages', auth, (req, res, next) => {
    res.render('users/messages', { user: req.user })
})


router.get('/', auth, (req, res, next) => {
    res.render('users/profile')
})

router.get('/delete', (req, res, next) => {
    User.findByIdAndRemove(req.user._id)
        .then(() => {
            res.redirect('/')
        })
        .catch(e => next(e))
})

module.exports = router