const express = require('express');

const Movie = require('../models/movie-model.js');

const moviesRoutes = express.Router();


moviesRoutes.get('/movies', (req, res, next) => {
  Movie.find((err, moviesList) => {
    if(err) {
      next(err);
      return;
    }
    res.render('movies/movies-list-view.ejs', {
    movies: moviesList
    });
  });
});

moviesRoutes.get('/movies/new', (req, res, next) => {
  res.render('movies/movies-new-view.ejs');
});

moviesRoutes.post('/movies/new', (req, res, next) => {
  const theMovie = new Movie({
  name: req.body.movieName,
  genre: req.body.movieGenre,
  plot: req.body.moviePlot
  });
  theMovie.save((err) => {
    if(err){
      res.render('products/new-product-view.ejs', {
        errors: theProduct.errors
      });
      return;
    }
    res.redirect('/movies');
  });
});

moviesRoutes.get('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId, (err, theMovie) => {
    if(err){
      next(err);
      return;
    }
    res.render('movies/movies-details-view.ejs', {
      movie: theMovie
    });
  });
});

moviesRoutes.post('/movies/:id/delete', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findByIdAndRemove(movieId, (err, theMovie) => {
    if(err) {
      next(err);
      return;
    }
    res.redirect('/movies');
  });
});

moviesRoutes.get('/movies/:id/edit', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId, (err, theMovie) => {
    if(err){
      next(err);
      return;
    }
    res.render('movies/movies-edit-view.ejs', {
      movie: theMovie
    });
  });
});

moviesRoutes.post('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;

  const movieChanges = {
    name: req.body.movieName,
    genre: req.body.movieGenre,
    plot: req.body.moviePlot
  };
  Movie.findByIdAndUpdate(movieId, movieChanges, (err, theMovie) => {
    if(err) {
        res.render('products/edit-product-view.ejs', {
          product:theProduct,
          validationErrors:theProduct.errors
        });
        return;
      }
      res.redirect('/movies');
  });
});

module.exports = moviesRoutes;
