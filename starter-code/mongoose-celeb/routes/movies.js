const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.js');

  router.get('/', (req, res, next) => {
    Movie.find()
    .then(data => res.render('movies/index', {data}))
    .catch(e => next(e));
  });

  router.get('/:movieId', (req, res, next) => {
    Movie.find({_id: req.params.movieId})
    .then(data => res.render('movies/show', {data}))
    .catch(e => next(e));
  });


module.exports = router;