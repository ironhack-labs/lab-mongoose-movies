const Movie = require("../models/movie.model")

//Movies list 
module.exports.list = (req, res, next) => {
    Movie.find()
    .then((foundMovie) => {
        res.render('movies/index', {movies: foundMovie})})
    .catch((e) => next(e));
  }