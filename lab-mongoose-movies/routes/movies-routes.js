const express = require('express');
const Celebrity = require('../models/celebrity-model.js');
const Movie  = require('../models/movies-model.js');

const movieRoutes = express.Router();

movieRoutes.get('/movies', (req, res, next) => {
  Movie.find((err, moviesList) => {
    if(err){
      next(err);
      return;
    }
    res.render('movies/movie-list-view.ejs', {
    movies: moviesList
    });
  });
});

movieRoutes.get('/movies/new', (req, res, next) => {
  res.render('movies/movie-new-view.ejs');
});

movieRoutes.post('/movies/new', (req, res, next) => {
  const theMovie = new Movie({
    name: req.body.movieName,
    genre: req.body.movieGenre,
    plot: req.body.moviePlotPhrase
  });
  theMovie.save((err) => {
    if(err){
      res.render('movies/movie-new-view.ejs', {
        errors: theMovie.errors
      });
      return;
    }

    res.redirect('/movies');
  });
});

movieRoutes.post('/movies/:id/delete', (req, res, next) => {
  const theMovie = req.params.id;

  Movie.findByIdAndRemove(theMovie, (err, theMovie) => {
    if(err) {
      next(err);
      return;
    }
    res.redirect('/movies');
  });
});

movieRoutes.get('/movies/:id/edit', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId, (err, theMovie) => {
    if(err) {
      next(err);
      return;
    }

  res.render('movies/movie-edit-view.ejs', {
      movie: theMovie
    });
  });
});

movieRoutes.post('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;

  const movieChanges = {
    name: req.body.movieName,
    genre: req.body.movieGenre,
    plot: req.body.moviePlotPhrase
  };

  Movie.findByIdAndUpdate(
    movieId,
    movieChanges,
    (err, theMovie) => {
      if(err) {
        res.render('views/movies/movie-edit-view.ejs', {
          movie: theMovie,
          validationErrors:theMovie.errors
        });
        return;
      }
      res.redirect('/movies');
  });
});



movieRoutes.get('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId, (err, theMovie) => {
    if(err){
      next(err);
      return;
    }
    res.render('movies/movie-details-view.ejs', {
      movie: theMovie
    });
  });
});

module.exports = movieRoutes;
