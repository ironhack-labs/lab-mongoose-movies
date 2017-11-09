const express = require('express');
const Movie = require('../models/movies');

const router = express.Router();

router.get('/', (req, res, next) => {
  Movie.find({}, (err, movies) => {
    if (err) { return next(err); }
    res.render('movies/index', {movies});
  });
});

router.get('/:id', (req, res, next) => {
  let movieId = req.params.id;

  Movie.findById(movieId, (err, movie) => {
    if (err) { return next(err); }
    res.render('movies/show', movie);
  });
});

module.exports = router;
