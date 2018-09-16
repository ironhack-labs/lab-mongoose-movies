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

router.get('/movies/:id', (req, res, next) => {
  let id = req.params.id;
  Movie.findById({_id: id})
  .then(movie => {
    console.log(movie)
    res.render('./movies/show', {movie})
  })
  
})

module.exports = router;