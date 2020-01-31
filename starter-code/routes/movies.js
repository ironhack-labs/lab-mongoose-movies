const express = require('express');
const router = express.Router();

const Movie = require('../models/movie')

router.get('/', (req, res, next) => {
  Movie.find()
    .then(moviesDB => {
      res.render('movies', {
        movies: moviesDB
      });
    })
    .catch(error => {
      console.log('Error while getting the movies from de DB: ', error)
      next()
    })

});

router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(theMovie => {
      res.render('movies/show', {
        movies: theMovie
      });
    })
    .catch(error => {
      console.log('Error while retrieving movies details: ', error);
      next()
    })

});


module.exports = router;