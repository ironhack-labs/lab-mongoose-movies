const express = require('express');
const router = express.Router();
const user = require('../models/user')
const bcrypt = require('bcryptjs')

/* GET home page */
router.get('/signup', (req, res, next) => {
    res.render('user/signup');
});

router.post('/signup', (req, res, next) => {
    const username = req.body.theUsername;
    const password = req.body.thePassword;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);


    user.create({
            username: username,
            password: hash
        })
        .then(() => {
            res.redirect('/')
        })
        .catch((error) => {
            next(err)
        })
});

module.exports = router;