const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity')

//list

router.get('/', (req, res, next)=>{

  Celebrity.find()
    .then(celebrities=>{
      res.render('celebrities/index',{celebrities})
    })
    .catch(e=>next(e))
})

// detail

router.get('/:id',(req, res, next)=>{
  const {id} = req.params
  Celebrity.findById(id)
    .then(celebrity=>{res.render('celebrities/show',celebrity)})
    .catch(e=>next(e))
})

//new celebrity

router.get('/new',(req, res, next)=>{
  res.render('celebrities/new')
})

router.post('/new',(req, res, next)=>{
  Celebrity.create(req.body)
    .then(celebrities=>{
      console.log(celebrities)
      res.redirect('/celebrities/index')
    })
    .catch(e=>{
      res.redirect('/celebrities/new')
      next(e)
    })
})

// //update

// router.get('/edit/:id',(req, res, next)=>{
//   const {id} = req.params
//   Book.findById(id)
//     .then(book=>{
//       res.render('book-edit-form',book)
//     }).catch(e=>next(e))
// })

// router.post('/edit/:id',(req, res, next)=>{
//   const {id} = req.params
//   Book.findByIdAndUpdate(id,{$set:req.body},{new:true})
//     .then(book=>{
//       console.log(book)
//       res.redirect(`/books/detail/${id}`)
//     }).catch(e=>next(e))
// })



module.exports = router