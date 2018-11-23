const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity')

router.get('/new',(req,res,next)=>{
  res.render('celebrities/new')
})
router.post('/new',(req,res)=>{
  Celebrity.create(req.body)
  .then(celebridad=>{
    res.redirect('/celebrities/index')
  }).catch(error=>{
    res.render('celebrities/detail',{celebridad:req.body,error})
  })
})
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
  }).catch(error=>next(error))
})
//borrar
router.get('/delete/:id',(req,res,next)=>{
  const {id}= req.params
  Celebrity.findById(id)
  .then(celebridad=>{
    res.render('celebrities/delete',celebridad)
  }).catch(e=>next(e))
})
router.post('/delete/:id',(req,res,next)=>{
  const {id} =req.params
  Celebrity.findByIdAndRemove(id)
  .then(celebridad=>{
    
    res.redirect('/celebrities/index')
  }).catch(e=>next(e))
})




module.exports = router