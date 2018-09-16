const router = require('./index');
const mongoose = require('mongoose');
const Movie = require('../models/movie.js');


router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then(movies => {
      res.render('movies/index', {movies})
    })
    .catch(e => console.log(e))
})

module.exports = router;