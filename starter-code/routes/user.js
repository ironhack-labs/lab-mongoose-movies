const express = require("express");
const router = express.Router();
const User = require('../models/User.model.js')
const bcrypt = require("bcrypt")
const saltRounds = 10
//Mostrar el formulario de registro de usuario
router.get('/signup',(req,res,next)=>{
    res.render('users/signup')
})
//Obtener los datos del formulario
router.post('/signup',async (req,res,next)=>{
    const {name, email, password} = req.body
try{
    const genResult = await bcrypt.genSalt(saltRounds)
    const passwordHash = await bcrypt.hash(password,genResult)
    const newUser = await User.create({name, email, passwordHash})
    console.log(`The user ${newUser} was created`)
}
catch(error){
    console.log(error)
}
})