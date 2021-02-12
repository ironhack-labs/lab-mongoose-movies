const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const User = require('../models/User.model.js')
const mongoose =require('mongoose')
const saltRounds = 10

//FORMULARIO DE REGISTRO
router.get('/signup',(req,res,next)=>{
    res.render('users/signup')
})

router.post('/signup', async (req,res,next)=>{
    const {username,email,password} = req.body
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
console.log(password)
    if(!username || !email || !password) {
        res.render('users/signup', {errorMessage:"All the information is required"})
        return;
    }

    if  (!regex.test(password)) {
        res.status(500).render('users/signup', {
            errorMessage:"The password must contain at least 6 characters, 1 number, 1 lowercase and 1 uppercase"
        })
    }

try{
    const genSaltRounds = await bcrypt.genSalt(saltRounds)
    const passwordHash = await bcrypt.hash(password,genSaltRounds)

    const newUser = await User.create(
        {username,email,passwordHash})

    console.log("New user created ",newUser)
    res.redirect('/userProfile')

} catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).render('users/signup', {errorMessage:'The email mus be in a email format <...>@mail.com'})
    } else if (error.code === 11000) {
        res.status(500).render("users/signup", {errorMessage:'The user all ready exist'})
    } else {
        next(error)
    }
}
})

///LOGIN DE USUARIOS
router.get('/login', (req,res,next)=>{
    res.render('users/login')
})

router.post('/login', (req,res,next)=>{
    const {email,password} =req.body
    console.log('Sessions ====> ',req.session)

    if (email === "" || password ==="") {
        res.render('users/login', {errorMessage: "Please fill all the login information"})
    }

    User.findOne({email})
    .then((loginUser) => {
        if (!loginUser) {
            res.render('users/login', {errorMessage:"The user it's not registered"})
            return;
        } else if(bcrypt.compareSync(password,loginUser.passwordHash)) {
            req.session.currentUser = loginUser;
            res.redirect('/userProfile')
        } else {
            res.render('users/login', {errorMessage:"Incorrect password"})
        }
    }).catch((e) => console.log(e))
   
})

//LOGOUT
router.post('/logout', (req,res,next)=>{
    req.session.destroy()
    res.redirect('/')
})

//ir a perfil del usuario
router.get('/userProfile', (req,res)=>{
    console.log(req.session)
    res.render('users/userProfile', {
        valorCookie:req.session
    })
})

module.exports = router;