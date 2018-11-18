const express = require('express');

const router  = express.Router();

const Movie = require('../models/Movie');

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => res.render('movies/index', { movies }))
    .catch(err => next(err));
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => res.render('movies/show', { movie }))
    .catch(err => next(err));
});

router.post('/movies', (req, res, next) => {
  const addedMovie = new Movie();

  if (req.body.title == '' || req.body.genre == '' || req.body.plot == '') res.redirect('/movies/new');

  addedMovie.title = req.body.title;
  addedMovie.genre = req.body.genre;
  addedMovie.plot = req.body.plot;

  console.log(addedMovie);
  addedMovie.save()
    .then(() => res.redirect('/movies'))
    .catch(() => res.redirect('/movies/new'));
});

module.exports = router;
