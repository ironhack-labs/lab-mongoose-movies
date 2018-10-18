const express = require('express');
const router = express.Router();
const Movie = require('../models/moviemodel');

//read
router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies', {movies});
  })
  .catch(error => {
    next(error);
  })
})

module.exports = router