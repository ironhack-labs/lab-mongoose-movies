const Movie = require("../models/movie.model")

//Movies list 
module.exports.list = (req, res, next) => {
    Movie.find()
    .then((foundMovie) => {
        res.render('movies/index', {movies: foundMovie})})
    .catch((e) => next(e));
  }

  //Movies detail

  module.exports.detail = (req, res, next) => {
    Movie.findById(req.params.id)
    .then((foundMovie) => {
      res.render('movies/show', {movies: foundMovie})
    })
    .catch((e) => next(e));
  }