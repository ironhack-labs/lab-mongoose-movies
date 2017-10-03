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



module.exports = movieRoutes;
