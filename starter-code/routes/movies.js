/* jshint esversion: 9*/
const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(allMoviesFromDB => {
      res.render('movies', { allMovies: allMoviesFromDB });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/movies/new-movie', (req, res, next) => {
  res.render('movies/new-movie', {title: "Add A New Movie"});
});

router.post('/movies', (req, res, next) => {
  const { title, genre, plot, cast } = req.body;

  const newMovie = new Movie({title, genre, plot, cast});

  newMovie.save()
    .then(() => {
      res.redirect('/movies');
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;
  Movie.findById(movieId)
    .then(movie => {
      res.render('movies/movie-details', { movie });
    })
    .catch(error => {
      next(error);
    });
});

router.post('/movies/:id/delete', (req, res, next) => {
  const movieId = req.params.id;
  Movie.findByIdAndRemove(movieId)
    .then(movie => {
      res.redirect('/movies');
    })
    .catch(error => {
      next(error);
    });
});

router.get('/celebrities/:id/edit',(req, res, next) => {
  const movieId = req.params.id;
  Movie.findById(movieId)
    .then(movie => {
      res.render('movies/edit-movie', { movie });
    }).catch(error => {
      next(error)
    });
});

router.post('/movies/:id', (req, res, next) => {
  const updatedMovie = {
    title: req.body.title,
    plot: req.body.plot,
    genre: req.body.genre
    // cast: req.body.cast  
  };
  
  const movieId = req.body.id;
  Movie.findByIdAndUpdate(movieId)
    .then(movie => {
      res.redirect('/movies');
    })
    .catch((error) => {
      next(error);
    });
})

module.exports = router;