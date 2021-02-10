const express= require('express');
const router= express.Router();

const {create, findById } = require('../models/Movie.model');
const Movie= require('../models/Movie.model.js')


//añadir nueva pelicula
router.get('/movies/new', (req, res, next) => {
    res.render('movies/new')
  })
  
  router.post('/movies/new', (req, res, next) => {
    console.log(req.body)
    const newMovie= {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    }
    console.log(newMovie)
  Movie.create(newMovie)
  .then((newMovie)=>{
    console.log(`movie created: ${newMovie}`)
      res.redirect("/movies")
  })
  .catch((error)=> console.log(error))
  })


  //eliminar pelicula
router.post('/movies/delete/:id', (req, res, next) => {
    console.log(req.params)
    const id= req.params.id
    Movie.findByIdAndRemove(id)
    .then((movieDeleted)=>{
      res.redirect("/movies")
    })
    .catch((error)=> {
      next(error)
    })
    })


//listar peliculas
router.get('/movies', (req, res, next)=>{
    Movie.find({})
    .then((foundMovies)=> {
        console.log(foundMovies)
        res.render('movies/index', {foundMovies})
    })
    .catch(error=> console.log(error))
})

//detalles de las peliculas
router.get('/movies/:id', (req, res, next) => {
    const id= req.params.id
     Movie.findById(id)
     .then((foundMovie)=>{
      console.log(foundMovie)
       res.render('movies/show', {foundMovie})
     })
   .catch(error => console.log(error));
   })



module.exports= router;