const express = require('express');
const Movies = require('../models/movie');

const router  = express.Router();

  router.get('/', (req, res, next) => {
    Movies.find((err, movies) => {
      if (err) { return next(err); }

      res.render('movies/index', {
        movies: movies
      });
    });
  });
  router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    Movies.findById(id, (err, movies) => {
      res.render('movies/show', {
        movies: movies
      });
    });
  });
module.exports = router;
