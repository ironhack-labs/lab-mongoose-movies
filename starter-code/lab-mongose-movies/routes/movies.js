///movies	GET	Show all movies
const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

//Lista de películas
router.get('/',(req,res,next)=>{
  Movie.find()
  .then(movies=>{
    res.render('movies/index',{movies})
  })
  .catch(e=>next(e))
})

//Detalle de la peli
router.get('/show/:id',(req,res,next)=>{
  const {id} = req.params
  Movie.findById(id)
  .then(movies=>{
    res.render('movies/show',movies)
  })
  .catch(e=>{
    console.log(e)
    next(e)
  })
})

//Nueva peli
router.get('/new',(req,res,next)=>{
  res.render('movies/new')
})

router.post('/new',(req,res,next)=>{
  Movie.create(req.body)
  .then(movie=>{
    res.redirect('/movies')
  })
  .catch()
})

//Borrar peli
router.get('/delete/:id',(req,res,next)=>{
  const {id}=req.params
  Movie.findByIdAndRemove(id)
  .then(movie=>{
    res.redirect('/movies')
  }).catch(e=>next(e))
})

//Actualizar peli
router.get('/edit/:id',(req,res,next)=>{
  const {id}=req.params
  Movie.findById(id)
  .then(movie=>{
    res.render('movies/edit',movie)
  })
  .catch(e=>next(e))
})

router.post('/edit/:id',(req,res,next)=>{
  const {id}=req.params
  Movie.findByIdAndUpdate(id,{$set:req.body},{new:true})
  .then(movie=>{
    res.redirect(`/movies/show/${id}`)
  }).catch(e=>next(e))
})

module.exports = router;