const express = require('express');

const Movie = require('../models/movie.js');

const router = express.Router();


router.get('/movies', (req, res, next) => {
  Movie.find((err, movies) => {
    if (err) {
      next(err);
      return;
    }

    res.render('movies/index', {
      movies: movies
    });
  });
});
//ADD one first you need to onclick clidplay the form
router.get('/movies/new', (req, res) => {
  res.render('movies/new');
});
// then you add
router.post('/newMovie', (req, res, next) => {
  const movieInput = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  };

  const newMovie = new Movie(movieInput);

  newMovie.save((err) => {
    if (err) {
      next(err);
      return;
    }

    res.redirect('/movies');
  });
});

//to remove
router.post('/movies/:id/delete', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findByIdAndRemove(movieId, (err, product) => {
    if (err) {
      next(err);
      return;
    }

    res.redirect('/movies');
  });
});

//TO EDDIT a movie first we need to target what the user is clicking
router.get('/movies/:id/edit', (req, res, next) =>  {
  const movieId = req.params.id;

  Movie.findById(movieId, (err, movie) => {
    if (err) {
      next(err);
      return;
    }

    res.render('movies/edit', {
      movie: movie
    });
  });
});
// THEN updateOne

router.post('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;
  const movieUpdate = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };

  Movie.findByIdAndUpdate(movieId, movieUpdate, (err, movie) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect('/movies');
  });

});


module.exports = router;
