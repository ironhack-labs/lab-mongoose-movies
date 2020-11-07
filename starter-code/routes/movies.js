const express = require('express');
const Movie = require('../models/movie');
const router  = express.Router();

  router.get('/movies', async (req, res, next) => {
    const movie= await Movie.find()
   // next(catch(err => console.error('There was an error', err)));
    res.render('movies/index', {movie})
  });

  module.exports = router;