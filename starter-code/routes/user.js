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


//LOGIN
router.get('/login', (req, res, next) => {
    res.render('user/login');
});



router.post('/login', (req, res, next) => {
    const username = req.body.theUsername;
    const password = req.body.thePassword;

    user.findOne({ username: username })
        .then(user => {
            if (!user) {
                res.redirect('/')
            }
            if (bcrypt.compareSync(password, user.password)) {
                // Save the login in the session!
                req.session.currentUser = user;
                res.redirect('/secret');
            } else {
                res.redirect('/')
            }
        })
        .catch(error => {
            next(error);
        })
});

router.post('/logout', (req, res, next) => {
    req.session.destroy();
    res.redirect('/');
})

router.get('/secret', (req, res, next) => {

    if (req.session.currentUser) {

        res.render('user/secret', { theUser: req.session.currentUser })
    } else {
        res.redirect('/')
    }

})




module.exports = router;