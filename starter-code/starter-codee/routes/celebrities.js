const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity')
//lsitar
router.get('/index',(req,res,next)=>{
  Celebrity.find()
  .then(celebrities =>{
    res.render('celebrities/index',{celebrities})
  }).catch(error=>next(error))
})
//detalles
router.get('/:id',(req,res,next)=>{
  const {id} = req.params
  Celebrity.findById(id)
  .then(celebridad =>{
    res.render('celebrities/detail',celebridad)
  }).catch(error=>next(e))
})

module.exports = router