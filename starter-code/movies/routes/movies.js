const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
  Movie.find((err, movies) => {
    if (err) {
      next(err);
    } else {
      res.render('movies/index', { title: 'Movies', movies });
    }
  });
});

router.get('/new', (req, res, next) => {
  res.render('movies/new', { title: 'Add a new movie' });
});

router.get('/:id', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId, (err, aMovie) => {
    if (err) {
      next(err);
    } else {
      res.render('movies/show', { title: aMovie.name, aMovie });
    }
  });
});

router.post('/', (req, res, next) => {
  const newMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  };

  Movie.create(newMovie, (err, docs) => {
    if (err) {
      next(err);
      res.render('movies/new', { title: 'Add a new celebrity' });
    } else {
      res.redirect('/movies');
    }
  });
});

router.post('/:id/delete', (req, res, next) => {
  let movieId = req.params.id;

  Movie.findByIdAndRemove(movieId, (err, docs) => {
    if (err) {
      next(err);
      return err;
    } else {
      res.redirect('/movies');
    }
  });
});

router.get('/:id/edit', (req, res, next) => {
  let movieId = req.params.id;

  Movie.findById(movieId, (err, aMovie) => {
    if (err) {
      next(err)
    } else {
      res.render('movies/edit', { title: 'Edit a movie', aMovie });
    }
  });
});

router.post('/:id', (req, res, next) => {
  let movieId = req.params.id;

  const movie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  };

  Movie.findByIdAndUpdate(movieId, movie, (err, movie) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/movies');
    }
  });
});

module.exports = router;