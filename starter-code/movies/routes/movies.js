const express = require('express');
const Movie = require('../models/movie');
const router = express.Router();

router.get('/', (req, res, next) => {
  Movie.find({}, (err, movies) => {
    if (err) { next(err); }
    res.render('movies/index.ejs', { movies });
  })
});

router.get('/new', (req, res, next) => {
  res.render('movies/new.ejs');
});

router.post('/', (req, res, next) => {
  const { name, genre, plot } = req.body;
  Movie.create({ name, genre, plot }, (err, docs) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/movies');
    }
  });
});

router.get('/:id', (req, res, next) => {
  const movieId = req.params.id;
  Movie.findById(movieId, (err, movies) => {
    if (err) { next(err); }
    res.render('movies/show', { movies });
  })
});

router.get('/:id/edit', (req, res, next) => {
  const movieId = req.params.id;
  Movie.findById(movieId, (err, movie) => {
    if (err) { next(err); }
    res.render('movies/edit', { movie });
  });
});

router.post('/:id', (req, res, next) => {
  const movieId = req.params.id;
  Movie.findByIdAndUpdate(movieId, req.body, (err, movie) => {
    if (err) { next(err); }
    res.redirect('/movies');
  });
});

router.post('/:id/delete', (req, res, next) => {
  const movieId = req.params.id;
  Movie.findByIdAndRemove(movieId, (err, movie) => {
    if (err) { next(err); }
    res.redirect('/movies');
  });
});

module.exports = router;