const express = require('express')
const router = express.Router()

// Requerimos el modelo Movie
const Movie = require('../models/Movie')

// Lista de Movies
router.get('/', (req, res, next) => {
  Movie.find()
    .then(allMovies => res.render('movies/index', { movies: allMovies }))
    .catch(error => console.log(error))
})

// Detalles de las Movies 
router.get('/list/:movie_id', (req, res, next) => {
  Movie.findById(req.params.movie_id)
    .then(theMovie => res.render('movies/show', { movie: theMovie }))
    .catch(error => console.log(error))
})


// Añadiendo nuevas movies con GET
router.get('/new', (req, res, next) => res.render('movies/new'))

// Añadiendo nuevas movies con POST
router.post('/', (req, res, next) => {
  const { title, genre, plot } = req.body
  const newMovie = new Movie({ title, genre, plot })

  newMovie.save()     //método save()
    .then(theCelebrity => {
      console.log(`Una nueva pelicula fue añadida ${newMovie}`)
      res.redirect('movies')
    })
    .catch(error => {
      res.redirect('/movies/new')
      console.log(error)
    })
})


// route para borrar movies con POST
router.post('/list/:movie_id/delete', (req, res, next) => {
  Movie.findByIdAndDelete(req.params.movie_id)
    .then(theMovie => res.redirect('/movies'))
    .catch(error => console.log(error))
})


//Editando movies con GET
router.get('/list/:movie_id/edit', (req, res, next) => {
  Movie.findById(req.params.movie_id)
    .then(theMovie => res.render('movies/edit', { movie: theMovie }))
    .catch(error => console.log(error))
})


//Editando movies con POST
router.post('/list', (req, res, next) => {
  const { title, genre, plot } = req.body
  Movie.update({ _id: req.query.movie_id }, { $set: { title, genre, plot } })
    .then(theMovie => {
      res.redirect('/movies')
    })
    .catch(error => console.log(error))
})



module.exports = router