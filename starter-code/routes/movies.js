const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  console.log('hola');
  Movie.find({})
  .then(movies => {
    res.render('movies/index',  {movies})
  })
  .catch(err => console.log(err))
});

// GET a specific movie
router.get('/movie/:id', (req, res, next) => {
  let movieId = req.params.id;
  console.log(movieId);
  Movie.find({_id: movieId})
  .then(movie => {
    res.render('movies/movie', {movie})
  })
  .catch(err => console.log(err))
});

// GET new movie page
router.get('/new', (req, res, next) => {
  res.render('movies/newMovie');
});

// POST new movie
router.post('/new', (req, res, next) => {
  Movie.create({...req.body})
  .then(movie => {
    console.log(movie);
    res.redirect('/movies');
  })
  .catch(err => console.log(err))
});

// Delete movie
router.get('/movie/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove({_id: req.params.id})
  .then(() => res.redirect('/movies'))
  .catch(err => console.log(err))
});





module.exports = router;