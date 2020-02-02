const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

//Get /movies route
router.get('/movies', (req, res) => {
  Movie.find()
    .then(moviesFromDB => {
      //   console.log('moviesFromDB: ', moviesFromDB);
      res.render('movie-views/movies', { moviesFromDB });
    })
    .catch(err => console.log(`Error while getting movies from DB: ${err}`));
});

module.exports = router;
