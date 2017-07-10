const express = require('express');

const MovieModel = require('../models/movie-model.js');

const router = express.Router();

router.get('/movies', (req, res, next) => {
  MovieModel.find((err, movieResults) => {
    if (err) {
      next(err);
      return;
    }
    res.render("movie-views/movie-list.ejs",{
      movieResults: movieResults
    });
  });
});

router.get('/movies/new', (req, res, next) => {
  res.render("movie-views/movie-new.ejs");
});

router.post('/movies/add', (req, res, next) => {
  const newMovie = new MovieModel({
    title: req.body.movieTitle,
    genre: req.body.movieGenre,
    plot: req.body.moviePlot
  });

  newMovie.save((err) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect('/movies');
  });
});

router.post('/movies/:movieId/delete', (req, res, next) => {
  MovieModel.findByIdAndRemove(
    req.params.movieId,
    (err) => {
      if (err) {
        next(err);
        return;
      }
      res.redirect('/movies');
    });
});

router.get('/movies/:movieId', (req, res, next) => {
  MovieModel.findById(
    req.params.movieId,
    (err, movieInfo) => {
      if (err) {
        next(err);
        return;
      }
      res.render('movie-views/movie-details.ejs', {
        movieInfo: movieInfo
      });
    });
});

module.exports = router;
