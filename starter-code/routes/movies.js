const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');

router.get('/', (req, res, next) => {
  Movie.find({})
    .then(movies => {
      res.render('movies/index', { movies })
    })
    .catch(error => console.log("Error to find movies" + error))
});

router.get('/:_id', (req, res, next) => {
  Movie.findById(req.params._id)
    .then(movie => {
      res.render('movies/show', { movie })
    })
    .catch(error => console.log("Error to find a movie" + error))
})


module.exports = router;