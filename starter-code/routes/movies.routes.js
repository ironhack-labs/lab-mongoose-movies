const express = require('express')
const router = express.Router()

const movie = require('../models/movie')

//Página de inicio de movies

// Listado de movies
router.get('/', (req, res, next) => {                                                           // ESTO ES EL CONTROLADOR                                                                                                  
  movie.find()                                                                              // ESTO ES EL MODELO
    .then(allMovies => {  
      console.log(allMovies)                                                                 // ESTO ES LA VISTA
      if (allMovies.length == 0) { 
        res.render("movies/index", {errMsg: "No hay registros"}) 
        return
      }                                                                  
      res.render('movies/index', { movies: allMovies })
    })   
    .catch(error => console.log(error))
})

//Nueva película
router.get('/new', (req, res) => res.render('movies/new', req))
router.post('/new', (req, res) => {
  const { title, genre, plot } = req.body
  if (!title || !genre || !plot){
    res.render("movies/new", {errMsg: "Faltan campos"})
    return
  }
  movie.findOne({title})
  .then(foundMovie =>{
      if (foundMovie) {
          res.render("movies/new", {errMsg: "La película ya existe"})
          return
      }
      const newMovie = new movie({ title, genre, plot })
      newMovie.save()
        .then(theMovie => res.redirect('/movies'))
        .catch(error => console.log(error))
  })
  .catch(err => console.log("**** Error en movie.findOne", err))
})

//Borrar película
router.get('/:id/delete', (req, res) => {
  movie.findByIdAndRemove(req.params.id)    
    .then(theMovie => res.redirect('/movies'))
    .catch(error => console.log(error))
})

//Editar película
router.get('/edit', (req, res) => {
  movie.findOne({ _id: req.query.movie_id })    
    .then(theMovie => res.render("movies/edit", { theMovie }))
    .catch(error => console.log(error))
})

router.post('/edit', (req, res) => {
  const { title, genre, plot } = req.body
  movie.update({ _id: req.query.movie_id }, { $set: { title, genre, plot } })
    .then(theMovie => res.redirect('/movies'))
    .catch(error => console.log(error))
})

//Detalle de la película
router.get("/:id", (req, res) => {
  movie.findById(req.params.id)
  .then(thisMovie => { 
    res.render('movies/show', { movie: thisMovie })
  })
  .catch(error => console.log(error))
})

module.exports = router