const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity')


router.get('/',(req, res, next)=>{
  Celebrity.find()
    .then(celebrity=>{
      res.render('celebrities/index',{celebrity})
    }).catch(e=>{
      next(e)
    })
})

router.get('/:id',(req, res, next)=>{
  const {id} = req.params
  Celebrity.findById(id)
    .then(celebrity=>{
      res.render('celebrities/show',celebrity)
    }).catch(e=>next(e))
})


router.get('/new',(req,res)=>{
  res.render('celebrities/new')
})

 router.post('/new',(req, res)=>{
  Celebrity.create(req.body)
    .then(celebrity=>{
      res.redirect('/celebrities')
    }).catch(error=>{
      res.render('celebrities/new',{celebrity:req.body,error})
    })
})



module.exports = router
