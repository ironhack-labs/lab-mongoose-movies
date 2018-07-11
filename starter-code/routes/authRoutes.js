const express       = require('express')
const userRouter    = express.Router();
const User          = require('../models/user');
const bcrypt        = require('bcryptjs');

userRouter.get('/signup', (req, res, next)=>{
    res.render('userViews/signupPage');
})

userRouter.post('/signup', (req, res, next)=>{
//create a salt
//hash it
const thePassword = req.body.thePassword;
const theUsername = req.body.theUserName;
const salt     = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(thePassword, salt);

    // res.send(req.body);
    User.create({username: theUsername, password: hashedPassword})
    .then((response)=>{
        res.redirect('/');
    })
    .catch((err)=>{
        next(err)
    })
})


module.exports = userRouter;