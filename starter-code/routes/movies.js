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
module.exports = router;
