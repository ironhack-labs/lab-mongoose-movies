const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie");



router.get('/movies', (req, res, next) => {
    Movies
      .find()
      .then(allMovies => {
        res.render('movies/index', { allMovies });
      })
      .catch(err => {
        next();
        console.log(`There was an error : \n ${err}`)
      })
  })

module.exports = router;
