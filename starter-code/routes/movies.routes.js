const express = require('express')
const router = express.Router()
const Movie = require('../models/movie.model')

// Listado de movies
router.get('/', (req, res) => {
  Movie.find()
    .then(allMovies => res.render('movies/movies-list', {
      movies: allMovies
    }))
    .catch(err => console.log(`Ha habido un error listando a las movies ${err}`))
})

// Detalles de las movies
router.get('/details/:ID', (req, res) => {
  const movieID = req.params.ID
  Movie.findById(movieID)
    .then(theMovie => res.render('movies/movies-details', theMovie))
    .catch(err => console.log(`Ha salido algo mal buscando la celebrity en la BBDD ${err}`))
})

// Creación de movies
router.get('/new', (req, res) => res.render('movies/movies-new'))
router.post('/new', (req, res) => {
  const {
    title,
    genre,
    plot
  } = req.body
  Movie.create({
      title,
      genre,
      plot
    })
    .then(() => res.redirect('/movies'))
    .catch(err => console.log(`Ha salido algo mal creando la nueva celebrity ${err}`))
})
// Eliminación de movies
router.get('/delete/:ID', (req, res) => {
  const movieID = req.params.ID
  Movie.findByIdAndDelete(movieID)
    .then(() => res.redirect('/movies'))
    .catch(err => console.log(`Ha habido un error eliminando a la celebrity de la BBDD ${err}`))
})

// Editar una movie
router.get('/edit', (req, res) => {

  const movieId = req.query.id

  Movie.findById(movieId)
    .then(theMovie => res.render('movies/movies-edit', theMovie))
    .catch(err => console.log(err))
})

router.post('/edit/:id', (req, res) => {

  const movieId = req.params.id

  Movie.findByIdAndUpdate(movieId, req.body)
    .then(() => res.redirect(`/movies/details/${movieId}`))
    .catch(err => console.log(err))
})

module.exports = router