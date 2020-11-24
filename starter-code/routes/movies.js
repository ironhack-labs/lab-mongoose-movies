const express = require('express');
const { model } = require('../models/Movie.model');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(moviesFromDB => {
    res.render('movies/index', {moviesFromDB});
  })
  .catch(error => {
    next(error);
  });
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.get('/movies/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
  .then(movie => {
    res.render('movies/show', {movie});
  })
  .catch(error => {
    next(error);
  });
});

router.post('/movies/new', (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create({ title, genre, plot })
  .then(() => {
    res.redirect('/movies');
  })
  .catch(() => {
    res.render('movies/new');
    window.alert('There was an eror while creating your movie. Please try again.')
  });
});

router.post('/movies/:movieId/delete', (req, res, next) => {
  Movie.findByIdAndDelete(req.params.movieId)
  .then(() => {
    res.redirect('/movies');
  })
  .catch(error => {
    next(error);
  });
});

router.get('/movies/:movieId/edit', (req, res, next) => {
  Movie.findById(req.params.movieId)
  .then(movie => {
      res.render('movies/edit', {movie});
  })
  .catch(error => {
      next(error);
  });
});

router.post('/movies/:movieId', (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.movieId, req.body, {new: true})
  .then(() => {
      res.redirect('/movies');
  })
  .catch(error => {
      next(error);
  });
});


module.exports = router;