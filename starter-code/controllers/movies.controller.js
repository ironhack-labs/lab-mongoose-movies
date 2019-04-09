const createError = require('http-errors');
const mongoose = require('mongoose');
const Movie = require('../models/movie.model');

module.exports.list = ((req, res, next) => {
  Movie.find({})
    .then( movies => {
      res.render('movies/index.hbs', {movies})
    })
    .catch(error => next(error))
})
