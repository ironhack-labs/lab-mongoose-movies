const express = require('express')
const router = express.Router()

const Movie = require('../models/movie-model')

//Read
router.get('/', (req, res, next) => {
  Movie.find()
    .then(allTheMovies => res.render('movies/index', { movies: allTheMovies }))
    .catch(error => {
      next()
      return `An error has occured: ${error}`
    })
})

router.get('/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(foundMovie => res.render('movies/details', foundMovie))
    .catch(error => {
      next()
      return `An error has occured: ${error}`
    })
})

//Create
router.get('/new', (req, res, next) => {
  res.render('movies/new')
})

router.post('/new', (req, res, next) => {
  const { title, image, genre, plot } = req.body

  Movie.create({ title, image, genre, plot })
    .then(res.redirect('/movies'))
    .catch(error => {
      res.redirect('movies/new')
      return `An error has occured: ${error}`
    })
})

//Delete
router.post('/:movieId/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.movieId)
    .then(res.redirect('/movies'))
    .catch(error => {
      next()
      return `An error has occured: ${error}`
    })
})

//Update
router.get('/:movieId/edit', (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(movie => res.render('movies/edit', movie))
})

router.post('/:movieId/edit', (req, res, next) => {
  const { title, image, genre, plot } = req.body

  Movie.findByIdAndUpdate(req.params.movieId, { title, image, genre, plot })
    .then(res.redirect('/movies'))
    .catch(error => {
      next()
      return `An error has occured: ${error}`
    })
})

module.exports = router;