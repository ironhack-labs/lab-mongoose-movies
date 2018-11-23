const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')

router.get('/new',(req,res,next)=>{
  res.render('movies/new')
})
router.post('/new',(req,res)=>{
  Movie.create(req.body)
  .then(pelicula=>{
    res.redirect('/movies/index')
  }).catch(error=>{
    res.render('movies/detail',{pelicula:req.body,error})
  })
})
//lsitar
router.get('/index',(req,res,next)=>{
  Movie.find()
  .then(peliculas =>{
    res.render('movies/index',{peliculas})
  }).catch(error=>next(error))
})
//detalles
router.get('/:id',(req,res,next)=>{
  const {id} = req.params
  Movie.findById(id)
  .then(pelicula =>{
    res.render('movies/detail',pelicula)
  }).catch(error=>next(error))
})
//borrar
router.get('/delete/:id',(req,res,next)=>{
  const {id}= req.params
  Movie.findById(id)
  .then(pelicula=>{
    res.render('movies/delete',pelicula)
  }).catch(e=>next(e))
})
router.post('/delete/:id',(req,res,next)=>{
  const {id} =req.params
  Movie.findByIdAndRemove(id)
  .then(pelicula=>{
    
    res.redirect('/movies/index')
  }).catch(e=>next(e))
})




module.exports = router