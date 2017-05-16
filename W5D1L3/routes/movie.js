const express = require('express');
const Movie = require('../models/movie.js');
const router = express.Router();

router.get('/movies', (req, res, next) => {
  Movie.find({}, {}, (err, flicks) => {
    res.render('movies/index', {});
  });
});
router.get('/movies/new', (req, res, next) => {
  const movieId = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  const newMovie = new Movie(movieId);
  newMovie.save((err) => {
    if (err) {
      next (err);
      return;
    }
    res.redirect('/movies');
  });
});

router.get('/celebrieties/:id', (req, res, next) => {
  const movieId = req.params.id;
  Movie.findById(MovieId, (err, item) => {
    if (err) {
      next(err);
      return;
    }
    res.render('/movies/show', {
      items: items
    });
  });
});
router.post('/movies/:id/delete', (req, res, next) => {
  const MovieId = req.params.id;
  Movie.findByIdAndRemove(movieId, (err, item) => {
    if(err) {
      next (err);
      return;
    }
    res.redirect('/movies');
  });
});


module.exports = router;
