//REQUIRES
const mongoose = require('mongoose');
const express = require('express');


//CONSTANTS
const router = express.Router();

//MODELS
const Celebrity = require('../models/Movie');

//ROUTES

router.get('/movies', (req, res, next) => {
  Celebrity.find()
    .then((movies) => {
      res.render('movies/index', {movies});
    })
    .catch((err) => {
      console.log('There was an error' , err);
    })
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/movies/new', (req, res, next) => {
  const movie = req.body;
  Celebrity.create(movie)
    .then(() => {
      res.redirect('/movies');
    })
})

router.get('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;
  Celebrity.findOne({_id: movieId})
  .then((movie) => {
    res.render('movies/show', {movie});
  })
  .catch((err) => {
    console.log(err);
  })
});

router.post('/movies/:id/delete', (req, res, next) => {
  const movieId = req.params.id;
  Celebrity.findByIdAndRemove(movieId)
    .then(() => {
      res.redirect('../');
    })
})
router.get('/movies/:id/edit', (req, res, next) => {
  const movie = req.params;
  Celebrity.findById(movie.id)
    .then((movie) => {
      res.render(`movies/edit`, {movie});
    })
})

module.exports = router;