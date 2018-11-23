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

module.exports = router