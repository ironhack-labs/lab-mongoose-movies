const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity')

router.get('/celebrities',(req,res)=>{
  Celebrity.find()
  .then(celebritiesFromDB => res.render('celebrities/index',{celebrities: celebritiesFromDB}))
  
  .catch(err=> console.log(`Error while displaying celebrities: ${err}`))
})

router.get('celebrities/:id',(req,res,next)=>{
  Celebrity.findById(req.params.id)
  .then((celebrity)=>{
    res.render('celebrities/show',celebrity)

  })
  .catch((e)=> next(e))
  
})

module.exports = router