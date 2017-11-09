const express = require('express');
const Movie = require('../models/movies');

const router = express.Router();

router.get('/', (req, res, next) => {
  Movie.find({}, (err, movies) => {
    if (err) { return next(err); }
    res.render('movies/index', {movies});
  });
});

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.get('/:id', (req, res, next) => {
  let movieId = req.params.id;

  Movie.findById(movieId, (err, movie) => {
    if (err) { return next(err); }
    res.render('movies/show', movie);
  });
});

router.post('/', (req, res, next) => {
  let movieInfo = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };

  const newMovie = new Movie(movieInfo);

  newMovie.save(err => {
    if (err) { return res.render('movies/new'); }
    return res.redirect('/movies');
  });
});

router.post('/:id/delete', (req, res, next) => {
  let movieId = req.params.id;

  Movie.findByIdAndRemove(movieId, (err, movie) => {
    if (err) { return next(err); }
    return res.redirect('/movies');
  });
});

router.get('/:id/edit', (req, res, next) => {
  let movieId = req.params.id;

  Movie.findById(movieId, (err, movie) => {
    if (err) { return next(err); }
    res.render('movies/edit', {movie});
  });
});

router.post('/:id', (req, res, next) => {
  let movieId = req.params.id;
  let movieInfo = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }

  Movie.findByIdAndUpdate(movieId ,movieInfo, (err, movie) => {
    if (err) { return next(err); }
    return res.redirect('/movies');
  });
});

module.exports = router;
