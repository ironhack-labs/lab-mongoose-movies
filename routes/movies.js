const express = require('express');
const router = express.Router();

const Movies = require('../models/movie.js');

router.get('/movies/', (req, res, next) => {
  Movies.find({}, (err, movies) => {
    if (err) {
      console.error(err);
    };
    res.render('movies/index', {
      movies
    });
  });
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.get('/movies/:id', (req, res, next) => {
  let id = req.params.id
  Movies.findById(id, (err, mov) => {
    if (err) {
      next(err);
    }
    res.render('movies/show', {
      mov,
    });
  });
});

router.post('/movies/', (req, res, next) => {
  const movInfo = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }
  const newMovie = new Movies(movInfo);
  newMovie.save((err) => {
    if (err) {
      console.error(err);
      return res.redirect('/movies/new');
    }
    return res.redirect('/movies');
  });
});

router.post('/movies/:id/delete', (req, res, next) => {
  let id = req.params.id
  Movies.findByIdAndRemove(id, (err, celeb) => {
    if (err) {
      next(err);
    }
    return res.redirect('/movies');
  });
});

module.exports = router;