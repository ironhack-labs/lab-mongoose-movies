const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie')


router.get('/',(req,res,next)=>{
  Movie.find()
    .then(movies => {
      res.render('movies/',{movies})
    }).catch(e=>next(e))
})


router.get('/detail/:id', (req,res,next)=>{
  const {id} = req.params
  Movie.findById(id)
  .then(movie=>{
    res.render('movies/show',movie)
  })
  .catch(e=>{
    console.log(e)
    next(e)
 })
})

router.get('/new',(req,res,next)=>{
  res.render('movies/new')
})

router.post('/new',(req,res,next)=>{
  Movie.create(req.body)
    .then(movie=>{
      res.redirect('/movies')
    }).catch(e=>next(e))
})


router.get('/:id/delete',(req,res,next)=>{
  const {id} = req.params
  res.render('movies/')
})

router.post('/:id/delete', (req,res,next)=>{
  const {id} = req.params
  Movie.findByIdAndRemove(id)
    .then(movie=>{
      res.redirect('/movies')
    }).catch(e=>next(e))
})


router.get('/:id/edit', (req,res,next)=>{
  const {id} = req.params
  Movie.findById(id)
    .then(movie=>{
      res.render('movies/edit',movie)
    }).catch(e=>next(e))
})

router.post('/:id/edit',(req,res,next)=>{
  const {id} = req.params
  Movie.findByIdAndUpdate(id,{$set:req.body}, {new:true})
  .then(movie=>{
    res.redirect(`/movies/detail/${id}`)
  }).catch(e=>next(e))
})


module.exports = router;