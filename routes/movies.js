const express     = require('express');
const Movie       = require('../models/movie.js');

const movieRoutes = express.Router();

movieRoutes.get('/movies', (req, res, next) => {
  Movie.find((err, movieList) =>{
    if (err) {
      next(err);
      return;
    }

    res.render('movies/index.ejs', {
      movies: movieList
    });
  });
});

movieRoutes.get('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId, (err, theMovie) => {
    if (err) {
      next(err);
      return;
    }

    if(!theMovie) {
      next();
      return;
    }

    res.render('movies/movie-show.ejs', {
      movie: theMovie
    });
  });
});

module.exports = movieRoutes;
