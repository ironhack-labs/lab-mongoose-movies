// Require mongoose
const mongoose = require('mongoose');

// Require Express
const express = require('express');
const movieRoutes = express.Router();

// Require Model
const Movie = require('../models/movies');


movieRoutes.get('/', (req, res, next) => {
  Movie.find({}, (err, moviesFromDb) => {
    if (err) { return next(err) };
    res.render('movies/movies', {
      movies: moviesFromDb,
      title: 'My Movies'
    });
  });
});

movieRoutes.get('/movies/new', (req, res, next) =>{
  res.render('movies/new');
});

movieRoutes.post('/movies/new', (req, res, next) => {
  const newMovie = new Movie({
    name: req.body.movieName,
    genre: req.body.movieGenre,
    plot: req.body.moviePlot
  });
  newMovie.save(err => {
    if (err) {
      res.render('movies/new', {
        errorMessage: "Please Add Name of the Movie"
      });
    } else {
      res.render('/movies');
    }
  });
});

// edit movie
movieRoutes.get('/movies/:id/edit', (req, res, next) =>{
  const movieId = req.params.id;
  movie.findById(movieId, (err, theMovie) => {
    if (err) { return next(err) };
    res.render('movies/edit', {
      movie: theMovie
    });
  });
});

movieRoutes.post('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;
  const udateMovie = {
    name: req.body.movieName,
    genre: req.body.movieGenre,
    plot: req.body.moviePlot
  };
  Movie.findByIdAndUpdate(
    movieId,
    updatedMovie,
    err => {
      if (err) {
        return next(err);
      }
    })
    res.redirect('/movies')
});

movieRoutes.post('/movies/:id/delete', (req, res, next) => {
  const movieId = req.params.id;
  movie.findByIdAndRemove(movieId, (err, theMovie) => {
    res.redirect('/movies');
  });
});

movieRoutes.get('movies/:id', (req, res, next) => {
  const movieId = req.params.id;
  Movie.findById(movieId, (err, theMovie) => {
    if (err) { return next(err) };
    res.render('movies/movies-details', {
      movies: theMovies,
      title: theMovie.name
    })
  });
});

// Export
module.exports = moviesRoutes;