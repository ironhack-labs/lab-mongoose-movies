const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');


router.get('/movies', (req, res, next) => {

  Movie.find()
    .then(movies => {
      console.log(movies);
      res.render("movies/index", { movies });
    })
    .catch(error => {
      console.log(error);
      next(err);
    })
});

module.exports = router;