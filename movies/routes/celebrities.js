const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity')

//list

router.get('/celebrities',(req,res,next)=>{
  Celebrity.find()
  .then(celebrities =>{
    res.render("celebrities",{celebrities})
  })
  .catch(error => {
    console.log(error)
  })
  
  
})