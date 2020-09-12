const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')
/* const checkLogin = require('../middleware/checkLogin') */

router.get('/signup', (req, res, next) => {
    res.render('signup')
})

router.post('/signup', (req, res, next) => {
    const {username , password} = req.body
    if (!username || !password) {
        res.render('signup', {errorMessage:'All fields required'})
        return
    }

    bcrypt.hash(password, 10)
    .then(hashPassword => {
        return User.create({
            username,
            password: hashPassword
        })
    })
    .then(() => {
        res.redirect('/')
    })
    .catch(e => {
        if(e.code === 11000) {
            res.render('signup', {errorMessage: 'Username taken!'})
        } else {
            next(e)
        }
    }) 
})

router.get('/login' , (req, res, next) => {
    res.render('login')
})

    router.post('/login', ( req, res, next) => {
    const {username, password} = req.body

    let userLogIn

    if(!username || !password){
        res.render('login', {errorMessage:'Forgot something?'})
        return
    }

    User.findOne({username})

    .then((user) => {
        if(user){
            userLogIn = user
            return bcrypt.compare(password,user.password)
        }
    })

    .then(result => {
        if(!result){
            return res.send('Incorrect Password')
        }
        req.session.user = user
           /* res.send('Now logged in!') */
           res.redirect('/')
        })
    .catch(e => console.log(e))
})



module.exports = router;