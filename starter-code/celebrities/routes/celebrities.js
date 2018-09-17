const express = require('express')
const route = express.Router()
const Celebrity = require('../models/Celebrity')


route.get('/',(req,res,next)=>{
  Celebrity.find()
  .then(celebrities=>{
    res.render('celebrities',{celebrities})
  })
  .catch()
})

route.get('/detail/:id',(req,res,next)=>{
  const {id} = req.params
  Celebrity.findById(id)
  .then(celebrity=>{
    res.render('detail',celebrity)
  })
  .catch()
})

//crear uno nuevo
route.get('/new',(req,res,next)=>{
  res.render('newFamous')
})

route.post('/new',(req,res,next)=>{
  Celebrity.create(req.body)
  .then(()=>{
    res.redirect('/celebrities')
  })
})

//eliminar 
route.get('/:id/delete',(req,res,next)=>{
  const {id} = req.params
  Celebrity.findById(id)
  .then(celebrity=>{
    res.render('delete', celebrity)
  })
  .catch()
})

route.post('/:id/delete',(req,res,next)=>{
  const {id} = req.params
  Celebrity.findByIdAndRemove(id)
  .then(()=>{
    res.redirect('/celebrities')
  })
  .catch()
})

//editar
route.get('/:id/edit',(req,res,next)=>{
  const {id} = req.params
  Celebrity.findById(id)
  .then(celebrity=>{
    res.render('edit',celebrity)
  })
})

route.post('/:id/edit',(req,res,nex)=>{
  const {id} = req.params
  Celebrity.findByIdAndUpdate(id,req.body)
  .then(()=>{
    res.redirect(`/celebrities/detail/${id}`)
  })
  .catch()
})

module.exports= route