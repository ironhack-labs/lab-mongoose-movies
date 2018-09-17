const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity')

router.get('/', (req, res, next)=>{
    Celebrity.find()
    .then(celebrities=>{
      res.render('celebrities-list', {celebrities})
    })
    .catch(e=>{
      console.log(e)
      next(e)
    })
 })

 router.get('/celebrity-detail/:id',(req,res,next)=>{
  const {id} = req.params
  Celebrity.findById(id)
  .then(celebrities=>{
    res.render('celebrity-detail', celebrities)
  })
  .catch(e=>{
    console.log(e)
    next(e)
  })
})

/////////

router.get('/new',(req, res, next)=>{
  res.render('celebrity-form')
})

router.post('/new', (req, res, next)=>{
  Celebrity.create(req.body)
  .then(celebrities=>{
    console.log(celebrities)
    res.redirect('/celebrities')
  }).catch(e=>next(e))

})

/////////

/////////
router.get('/edit/:id',(req, res, next)=>{
  const {id} = req.params
  Celebrity.findById(id)
    .then(celebrities=>{
      res.render('celebrity-edit-form',celebrities)
    }).catch(e=>next(e))
})

router.post('/edit/:id',(req, res, next)=>{
  const {id} = req.params
  Celebrity.findByIdAndUpdate(id,{$set:req.body},{new:true})
    .then(celebrities=>{
      console.log(celebrities)
      res.redirect(`/celebrities/celebrity-detail/${id}`)
    }).catch(e=>next(e))
})


module.exports = router