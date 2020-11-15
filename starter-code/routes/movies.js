const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie')


// -- ENDPOINTS --

// List of movies
router.get('/', (req, res) => {

  Movie
    .find()
    .then(allMovies => res.render('movies/index', { allMovies }))
    .catch(err => console.log(err))
})


// Details of movie
router.get('/details/:id', (req, res) => {

  const movieId = req.params.id

  Movie
    .findById(movieId)
    .then(theMovie => res.render('movies/show', theMovie))
    .catch(err => console.log(err))
})


// -----  NEW MOVIE -----

// New movie form. Renderized (GET)
router.get('/new', (req, res) => res.render('movies/new'))

// New movie form. (POST)
router.post('/new', (req, res) => {

  const { title, genre, plot } = req.body

  Movie
    .create({ title, genre, plot })
    .then(() => res.redirect('/movies'))
    .catch(err => console.log(err))
})


// Delete movie
router.post('/delete', (req, res) => {

  const movieId = req.query.movie_id

  Movie
    .findByIdAndDelete(movieId)
    .then(() => res.redirect('/movies'))
    .catch(err => console.log(err))
})
 

// -----  EDIT MOVIE  -----

// Edit movie form. Renderized (GET)
router.get('/edit/:id', (req, res) => {

  const movieId = req.params.id
  
  Movie
    .findById(movieId)
    .then(movieInfo => res.render('movies/edit', movieInfo))
    .catch(err => console.log(err))
})

// Edit movie form. (POST)
router.post('/edit', (req, res) => {

  const movieId = req.query.movie_id
  
  const { title, genre, plot } = req.body

  Movie
    .findByIdAndUpdate(movieId, { title, genre, plot })
    .then(movieInfo => res.redirect('/movies'))
    .catch(err => console.log(err))
})


module.exports = router
