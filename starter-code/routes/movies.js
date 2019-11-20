const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movies');

router.get('/', (req, res, next) => {
  Movie.find({})
  .then(movies => res.render('../views/movies/index', {movies}))
  .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  const {title, genre, plot} = req.body;
  console.log(req.body);
  const movie = new Movie({title: title, genre: genre, plot: plot});
  movie.save()
  .then(() => res.redirect('/movies'))
  .catch(err => next('/new'));
});

router.get('/new', (req, res, next) => {
  res.render('../views/movies/new');
});

router.get('/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
  .then(movie => res.render('../views/movies/show', movie))
  .catch(err => next(err));
});

router.post('/:movieId', (req, res, next) => {
  const {title, genre, plot} = req.body;
  Movie.findByIdAndUpdate(req.params.movieId, {title: title, genre: genre, plot: plot})
  .then(() => res.redirect(`/movies/${req.params.movieId}`))
  .catch(err => next(err));
});

router.post('/:movieId/delete', (req, res, next) => {
  Movie.findByIdAndDelete(req.params.movieId)
  .then(() => res.redirect('/movies'))
  .catch(err => next(err));
});

router.get('/:movieId/edit', (req, res, next) => {
  Movie.findById(req.params.movieId)
  .then((movie) => res.render('../views/movies/edit', movie))
  .catch(err => next(err));
});

module.exports = router; 