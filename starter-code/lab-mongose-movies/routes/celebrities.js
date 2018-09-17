///celebrities	GET	Show all celebrities
const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')

//Lista de celebridades
router.get('/',(req,res,next)=>{
  Celebrity.find()
  .then(celebrities=>{
    res.render('celebrities/index',{celebrities})
  })
  .catch(e=>next(e))
})

//Detalle de la celebridad
router.get('/show/:id',(req,res,next)=>{
  const {id} = req.params
  Celebrity.findById(id)
  .then(celebrities=>{
    res.render('celebrities/show',celebrities)
  })
  .catch(e=>{
    console.log(e)
    next(e)
  })
})

//Nueva celebridad
router.get('/new',(req,res,next)=>{
  res.render('celebrities/new')
})

router.post('/new',(req,res,next)=>{
  Celebrity.create(req.body)
  .then(celebrity=>{
    res.redirect('/celebrities')
  })
  .catch()
})

//Borrar celebridad
router.get('/delete/:id',(req,res,next)=>{
  const {id}=req.params
  Celebrity.findByIdAndRemove(id)
  .then(celebrity=>{
    res.redirect('/celebrities')
  }).catch(e=>next(e))
})

//Actualizar celebridad
router.get('/edit/:id',(req,res,next)=>{
  const {id}=req.params
  Celebrity.findById(id)
  .then(celebrity=>{
    res.render('celebrities/edit',celebrity)
  })
  .catch(e=>next(e))
})

router.post('/edit/:id',(req,res,next)=>{
  const {id}=req.params
  Celebrity.findByIdAndUpdate(id,{$set:req.body},{new:true})
  .then(celebrity=>{
    res.redirect(`/celebrities/show/${id}`)
  }).catch(e=>next(e))
})

module.exports = router;