var express = require('express');
const Movie = require('../models/movie');

var router = express.Router();

/* GET celebrities listing. */
router.get('/movies', (req, res, next) => {
  Movie.find({}, (err, movies) => {
    if (err) {return next(err);}

    res.render('movies/index', {movies: movies});
  });
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/movies', (req, res, next) => {
  let movieInfo = {
    title: req.body._title,
    genre: req.body._genre,
    plot: req.body._plot};

  const newMovie = new Movie(movieInfo);

  newMovie.save( (err) => {
    if (err) {
      return res.render('movies/new', {movie: newMovie});
    }
    return res.redirect('/movies');
  });
});

router.get('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;
  Movie.findById(movieId, (err, movie) => {
    if (err) {return next(err);}
    res.render('movies/show', {movie: movie});
  });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  let id = req.params.id;

  Celebrity.findByIdAndRemove(id, (err, celebrity) => {
    if (err){ return next(err); }

    return res.redirect('/celebrities');
  });
});

module.exports = router;
