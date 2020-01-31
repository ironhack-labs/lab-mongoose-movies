const express = require('express');
const router  = express.Router();

const Movie = require('./../models/Movie.js');

/* /movies/index page */
router.get('/index', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies/index', {movies});
    })
    .catch(error => {
      next();
    })
});

/* /movies/:id page */
router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movies/show', {movie});
    })
    .catch(error => {
      next();
    })
});

module.exports = router;
