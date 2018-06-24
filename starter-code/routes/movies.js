const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.js');

router.get('/', (req, res, next) => {
  Movie.find()
    .then(movies => {
      console.log(movies);
      res.render("movies/index", { movies });
    })
    .catch(error => {
      console.log(error);
      next();
    })
});

router.get('/:id', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findOne({'_id':movieId})
    .then(movie => {
      // console.log(celebrities);
      res.render("movies/show", { movie });
    })
    .catch(error => {
      console.log(error);
      next();
    })
});

module.exports = router;