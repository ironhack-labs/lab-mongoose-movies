const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity')

//lista

router.get('/',(req,res,next)=>{
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/c-list',{celebrities})
    })
    .catch(e=>next(e))
})

//detalle

router.get('/detail/:id', (req,res,next)=>{
  const {id} = req.params
  Celebrity.findById(id)
  .then(celebrity=>{
    res.render('celebrities/c-detail',celebrity)
  })
  .catch(e=>{
    console.log(e)
    next(e)
 })
})


//post

router.get('/new',(req,res,next)=>{
  res.render('/celebrities/c-add')
})

router.post('/new',(req,res,next)=>{
  Celebrity.create(req.body)
    .then(celebrity=>{
      console.log(celebrity)
      res.redirect('/celebrities/c-list')
    })
    .catch(e=>next(e))
})



//borrar 

router.get('/:id/delete',(req,res,next)=>{
  const {id} = req.params
  res.render('celebrities/c-list')
})

router.post('/:id/delete', (req,res,next)=>{
  const {id} = req.params
  Celebrity.findByIdAndRemove(id)
    .then(celebrity=>{
      res.redirect('/celebrities/c-list')
    })
    .catch(e=>next(e))
})


//update

router.get('/:id/edit', (req,res,next)=>{
  const {id} = req.params
  Celebrity.findById(id)
    .then(celebrity=>{
      res.render('celebrities/c-edit',celebrity)
    })
    .catch(e=>next(e))
})

router.post('/:id/edit',(req,res,next)=>{
  const {id} = req.params
  Celebrity.findByIdAndUpdate(id,{$set:req.body}, {new:true})
  .then(celebrity=>{
    res.redirect(`/celebrities/c-detail/${id}`)
  })
  .catch(e=>next(e))
})


module.exports = router