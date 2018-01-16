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

module.exports.new = (req, res, next) => {  
  res.render('movies/form', {
    movie: new Movie()
  });
};

module.exports.create = (req, res, next) => {
  const movie = req.body;
  const newMovie = new Movie(movie);
  newMovie.save().then(() => {
    res.redirect('/movies');
  });
};

module.exports.edit = (req, res, next) => {
  Movie.findById(req.params.id).then((movie) => {
    res.render('movies/form', {
      movie: movie
    });
  });
};

module.exports.update = (req, res, next) => {
  const movieId = req.params.id;
  const updates = {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
  };

  Movie.findByIdAndUpdate(movieId, updates).then((movie) => {
    res.redirect('/movies');
  });
};

module.exports.delete = (req, res, next) => {
  const movieId = req.params.id;

  Movie.findByIdAndRemove(movieId).then((movie) => {
    return res.redirect('/movies');
  });
};