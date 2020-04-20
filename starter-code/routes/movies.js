/* jshint esversion: 9*/
const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(allMoviesFromDB => {
      res.render('movies', { allMovies: allMoviesFromDB });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/movies/new-movie', (req, res) => {
  res.render('movies/new-movie', {title: "Add A New Movie"});
});

router.post('/movies', (req, res, next) => {
  const { title, genre, plot, cast } = req.body;

  const newMovie = new Movie({title, genre, plot, cast});

  newMovie.save()
    .then(() => {
      res.redirect('/movies');
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/movies/:id', (req, res, next) => {
  Movie.find(req.params)
    .then(movie => {
      res.render('movies/show', {movie});
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;