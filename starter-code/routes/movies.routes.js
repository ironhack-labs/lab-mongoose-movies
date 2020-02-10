const express = require('express')
const router = express.Router()
const Movie = require('../models/movie.model')

// Mostrar listado completo de películas
router.get('/', (req, res) => {
  Movie.find()
    .then(allMovies => res.render('movies/movies-list', { movies: allMovies }))
    .catch(err => console.log("Error consultando las películas en la BBDD: ", err))
})

// Mostras detalles de película
router.get('/movies-details/:id', (req, res) => {
  const movieId = req.params.id
  Movie.findById(movieId)
    .then(theMovie => res.render('movies/movie-details', theMovie))
    .catch(err => console.log("Error consultadno la BBDD: ", err))
})

// Inclusión de una nueva película en la BBDD
router.get('/new', (req, res) => res.render('movies/new'))
router.post('/new', (req, res) => {
  const { title, genre, plot } = req.body
  Movie.create({ title, genre, plot })
    .then(() => res.redirect('/movies'))
    .catch(err => {
      res.redirect('/new')
      console.log("Error incluyendo la entrada en la BBDD: ", err)
    })
})


// Editar película
router.get('/edit', (req, res) => {
  const movieId = req.query.id
  Movie.findById(movieId)
    .then(theMovie => res.render('movies/edit', theMovie))
    .catch(err => console.log(err))
})
router.post('/edit/:movieId', (req, res) => {
  const movieId = req.params.movieId

  // Retorna el objeto actualizado:
  Movie.findByIdAndUpdate(movieId, req.body)
    .then(x => res.redirect(`/movies/movie-details/${movieId}`))
    .catch(err => console.log(err))
})

module.exports = router