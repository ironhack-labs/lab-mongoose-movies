const mongoose = require('mongoose');
const express = require('express');
const Movie = require('../models/movies');
const Celebrity = require('../models/celebrity');
const movieRoutes = express.Router();

movieRoutes.get('/', (req, res, next) => {

  Movie.find({}, (err, movie) => {
  if (err) { return next(err) }
  res.render('movies/index', {
    movie: movie
    });
  });
});

movieRoutes.get('/new', (req, res, next) => {
  res.render('movies/new');
});

movieRoutes.post('/', (req, res, next) => {
  const movieInfo = {
      title: req.body.title,
      plot: req.body.plot,
      genre: req.body.genre
      };
  const newMovie = new Movie(movieInfo);

  newMovie.save( (err) => {
    if (err) {
          return res.render('movies/new', { errors: newMovie.errors });
        }    // redirect to the list of products if it saves
    return res.redirect('/movies');
  });
});


movieRoutes.get('/:id', (req, res, next) => {
   const movieId = req.params.id;

  Movie.findById(movieId, (err, movie) => {
     if (err) { return next(err); }
     res.render('movies/show', {movie: movie});
   });
 });

movieRoutes.post('/:id/delete', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findByIdAndRemove(movieId, (err, movie) => {
    if (err){ return next(err); }
    return res.redirect('/movies');
  });
});


movieRoutes.get('/:id/edit', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId, (err, movie) => {
    if (err) {return next(err); }
    res.render('movies/edit', {movie: movie});
  })
})

movieRoutes.post('/:id', (req, res, next) => {
  const movieId = req.params.id;

  /*
   * Create a new object with all of the information from the request body.
   * This correlates directly with the schema of Product
   */
  const updates = {
      title: req.body.title,
      plot: req.body.plot,
      genre: req.body.genre,
  };

  Movie.findByIdAndUpdate(movieId, updates, (err, product) => {
    if (err){ return next(err); }
    return res.redirect('/movies');
  });
});




module.exports = movieRoutes;
