const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.js');

  router.get('/', (req, res, next) => {
    Movie.find()
    .then(data => res.render('movies/index', {data}))
    .catch(e => next(e));
  });

  router.get('/new', (req, res) => {
    res.render('movies/new');
  });

  router.post('/new', (req, res, next) => {
    const {title, genre, plot} = req.body;
    const movie = new Movie({title, genre, plot});
    movie.save()
    .then(() => res.redirect('/movies'))
    .catch(e => next(e));
  });

  router.get('/:movieId/delete', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.movieId)
    .then(() => res.redirect('/movies'))
    .catch(e => next(e));    
  });

  router.get('/:movieId/edit', (req, res, next) => {
    Movie.find({_id: req.params.movieId})
    .then(data => res.render('movies/edit', {data}))
    .catch(e => next(e));
  });

  router.post('/:movieId', (req, res, next) => {
    const { title, genre, plot} = req.body;
    Movie.findByIdAndUpdate(req.params.movieId, {$set: {title, genre, plot}})
    .then(() => res.redirect('/movies'))
    .catch(e => next(e));
  });

  router.get('/:movieId', (req, res, next) => {
    Movie.find({_id: req.params.movieId})
    .then(data => res.render('movies/show', {data}))
    .catch(e => next(e));
  });


module.exports = router;