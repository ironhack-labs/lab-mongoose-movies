const express = require('express');
const Movie = require('../models/movie.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  Movie.find({})
    .then((movieArray) => {
      res.render('movies/list', { movieArray, header: 'Movies' });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/new', (req, res, next) => {
  res.render('movies/new', { header: 'Add movie' });
});

router.get('/:id', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId)
    .then((movie) => {
      res.render('movies/detail', { movie, header: 'Movie details' });
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/add', (req, res, next) => {
  const { title, genre, plot } = req.body;

  Movie.create({ title, genre, plot })
    .then(() => {
      res.redirect('/movies');
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/:id/destroy', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findByIdAndRemove(movieId)
    .then(() => {
      res.redirect('/movies');
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/:id/edit', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId)
    .then((movie) => {
      res.render('movies/edit', { movie, header: 'Edit movie' });
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/:id/update', (req, res, next) => {
  const movieId = req.params.id;
  const { title, genre, plot } = req.body;

  Movie.findByIdAndUpdate(movieId, { title, genre, plot })
    .then(() => {
      res.redirect('/movies');
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
