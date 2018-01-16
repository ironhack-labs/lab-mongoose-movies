const Movie = require('../models/movie.model');

module.exports.index = (req, res, next) => {
  Movie.find({}).then((movies) => {
    res.render('movies/index', {
      movies: movies
    });
  });
};

module.exports.show = (req, res, next) => {
  Movie.findById(req.params.id).then((movie) => {
    res.render('movies/show', {
      movie: movie
    });
  });
};