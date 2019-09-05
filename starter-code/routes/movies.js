const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.js')

/* GET show all movies */
router.get('/', (req, res, next) => {
  Movie.find({})
    .then((movieList) => {
      res.render('../views/movies/index', { movieList })
    })
    .catch(err => next(err))
})

/* GET show a form to create a movie */
router.get('/new', (req, res, next) => {
  res.render('../views/movies/new')
})

/* POST send data from the form to this route to create the movie and save in the database */
router.post('/', (req, res, next) => {
  const { title, genre, plot } = req.body
  const newMovie = new Movie({ title, genre, plot })
  newMovie.save()
    .then(() => {
      res.redirect('/movies')
    })
    .catch(() => {
      console.log(err)
      res.redirect('/movies/new')
    })
})

/* POST retrieve id, find by id & delete specific movie */
router.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove({ _id: req.params.id })
    .then(() => {
      res.redirect('/movies')
    })
    .catch(err => next(err))
})

/* GET show a form to edit a movie */
router.get('/:id/edit', (req, res, next) => {
  Movie.findById({ _id: req.params.id })
    .then(movie => {
      res.render('../views/movies/edit', movie)
    })
    .catch(err => next(err))
})

/* POST send the data from the form to this route to update and save the movie to the database */
router.post('/:id', (req, res, next) => {
  const { title, genre, plot } = req.body
  Movie.update({ _id: req.params.id }, { $set: { title, genre, plot } })
    .then(() => {
      res.redirect('/movies')
    })
    .catch(err => next(err))
})

/* GET show a specific movie */
router.get('/:id', (req, res, next) => {
  Movie.findOne({ _id: req.params.id })
    .then(movie => {
      res.render('../views/movies/show', movie)
    })
})


module.exports = router