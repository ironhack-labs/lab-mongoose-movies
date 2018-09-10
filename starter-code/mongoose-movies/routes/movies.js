const express = require('express');
const router  = express.Router();
const Movie    = require('../models/movie')

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((movieInfo) => {
    res.render('movies/index', {listOfMovies: movieInfo})
  })
  .catch((err) => {
    next(err)
  })
})

module.exports = router;