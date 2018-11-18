const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');
const genericMovie = new Movie();

router.get('/', (req, res, next) => {
  Movie.find({})
    .then(movies => {
      res.render('movies/index', { movies })
    })
    .catch(error => console.log("Error to find movies" + error))
});

router.get('/new', (req, res, next) => {
  res.render('movies/new')
})

router.get('/:_id', (req, res, next) => {
  Movie.findById(req.params._id)
    .then(movie => {
      res.render('movies/show', { movie })
    })
    .catch(error => console.log("Error to find a movie" + error))
})

router.post('/', (req, res, next) => {
  genericMovie.title = req.body.title;
  genericMovie.genre = req.body.genre;
  genericMovie.plot = req.body.plot;
  genericMovie.save()
    .then(() => {
      res.redirect('/movies')
    })
    .catch(error => {
      console.log("Error to add a new movie" + error)
      res.redirect('movies/new')
    })
})


module.exports = router;