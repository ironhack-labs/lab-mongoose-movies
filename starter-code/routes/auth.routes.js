const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs")
const bcryptSalt = 10

const User = require('./../models/user.model')
const app = require('../app')


router.get('/signup', (req, res) => res.render('auth/signup'))


router.post('/signup', (req, res) => {

 

  const { email, password } = req.body
  
  //console.log({ email, password } )

    // if (email.length === 0 || password.length === 0) {
    //     res.render('auth/signup', { errorMsg: 'Debes rellenar todos los campos' })
    //     return
    // }

    // // if (password.length < 8) {
    // //     res.render('auth/signup', { errorMsg: 'La contraseña es demasiado corta' })
    // //     return
    // // }

    User
        .findOne({ email: email })
        .then(response => {
            if (response) {
                res.render('auth/signup', { errorMsg: 'Usuario ya registrado' })
                return
            }

            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)

            User
                .create({ email, password: hashPass })
                .then(() => res.render('index', { successMsg: 'Registro completado' }))
                .catch(err => console.log(err))
        })
})



router.get('/login', (req, res) => res.render('auth/login'))


router.post('/login', (req, res, next) => {

  const { email, password } = req.body
  
  //console.log({ username, password })

    // if (email.length === 0|| password.length === 0) {
    //     res.render("auth/login-form", { errorMsg: "Debes rellenar todos los campos." })
    //     return
    // }

    User
        .findOne({ email: email })
        .then(response => {

            if (!response) {
                res.render("auth/login", { errorMsg: "Usuario no encontrado" })
                return
            }

            if (!bcrypt.compareSync(password, response.password)) {
                res.render("auth/login", { errorMsg: "Contraseña incorrecta" })
                return
            }

            req.session.currentUser = response 
            res.render('index', { successMsg: '¡Bienvenid@ a QuémeComent_app!' })
        })
        .catch(err => console.log(err))
})


// Cierre sesión
//router.get('/cerrar-sesion', (req, res) => req.session.destroy((err) => res.redirect("/")))


module.exports = router