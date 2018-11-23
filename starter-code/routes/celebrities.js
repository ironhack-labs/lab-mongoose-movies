const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity')

//List Celebrities
router.get('/',(req, res, next)=>{
  Celebrity.find()
    .then(celebrities=>{
      res.render('celebrities/list',{celebrities})
    }).catch(e=>{
      next(e)
    })
})

router.get('/detail/:id',(req, res, next)=>{
  const {id} = req.params
  Celebrity.findById(id)
    .then(celebrity=>{
      res.render('celebrities/detail',celebrity)
    }).catch(e=>{
      next(e)
    })
})

//Create Celebrities
router.get('/new',(req, res)=>{
  const action = '/celebrities/new'
  res.render('celebrities/form',{action})
})

router.post('/new',(req, res)=>{
  Celebrity.create(req.body)
    .then(celebrity=>{
      res.redirect('/celebrities')
    }).catch(error=>{
      console.log(error)
      res.render('celebrities/form',{celebrity:req.body,error})
    })
})

module.exports = router