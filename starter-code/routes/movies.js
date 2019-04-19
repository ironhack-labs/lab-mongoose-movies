const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

router.get('/movies/:id', (req, res, next) => {
  const id = req.params.id;
  Movie.findById(id)
  .then(movie => {
    res.render('movies/show', {movie})
  })
  .catch(err => next(err));
})

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies/index', {movies})
    })
    .catch(err => next(err));
})

module.exports = router