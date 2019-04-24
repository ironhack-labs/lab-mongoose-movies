const express = require('express');

const router = express.Router();
const Movies = require('../models/Movie.js'); // MODEL DECLARADO

// Find All
router.get('/', (req, res) => {
  Movies.find()
    .then((result) => {
      console.log(result);
      
      res.render('movie/movie-list', { movies: result });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

module.exports = router;
