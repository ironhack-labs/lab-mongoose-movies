const mongoose = require('mongoose');
const express = require('express');
const router  = express.Router();
const User = require('../models/User.model.js')


const bcrypt = require("bcrypt")
const saltRounds = 10
//Mostrar el formulario de registro de usuario
router.get('/signup',(req,res,next)=>{
    res.render('users/signup' ,{userInSession: req.session.currentUser})
})

//Obtener los datos del formulario
router.post('/signup',async (req,res,next)=>{
    const {name, email, password} = req.body
try{
    const genResult = await bcrypt.genSalt(saltRounds)
    const passwordHash = await bcrypt.hash(password,genResult)
    const newUser = await User.create({name, email, passwordHash})
    console.log(`The user ${newUser} was created`)
    res.redirect("/login")
}
catch(error){
    console.log(error)
}
})

router.get("/login" , async (req,res,next)=>{
    res.render("users/loginForm" , {userInSession: req.session.currentUser})
})


router.post("/login" , async (req,res,next)=>{
    const {email , password } = req.body
    
    if(!email||!password){
        res.render("users/loginForm",{errorMessage : "TODOS LOS CAMPOS PORFAVOR"})
    }

    const userDB = await User.findOne({email})
    if(!userDB){
        res.render("users/loginForm",{errorMessage: "Este usuario no existe"})
    }
    const match = await bcrypt.compareSync(password , userDB.passwordHash)
    console.log(match)
    if(match){
        req.session.currentUser = userDB 
        console.log("ESTO ME IMPRIME LA COOKIE ====>", req.session.currentUser)
        res.redirect("/login")
    }else{
        res.render("users/loginForm",{ errorMessage : "Contraseña incorrecta"})
    }  
})

router.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
  });

module.exports = router;