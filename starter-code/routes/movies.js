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


module.exports = router;