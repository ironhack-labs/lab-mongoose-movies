const express = require('express');
const Movie = require('../models/movie');

const router  = express.Router();

router.get('/', (req, res, next) => {
  Movie.find({}, (err, movies) => {
    if (err) { return next(err) }
    res.render('movies/index', {
      movies: movies
    });
  });
});

router.get('/new', (req, res, next) => {
  res.render('movies/form', {
    movie: new Movie()
  });
});

router.post('/', (req, res, next) => {
  const movieInfo = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  };

  // Create a new Movie with the params
  const newMovie = new Movie(movieInfo);

  newMovie.save((err) => {
    if (err) {
      return res.render('movies/form', {
        movie: newMovie
      })
    }

    return res.redirect('/movies');
  });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id

  Movie.findById(id, (err, movie) => {
    res.render('movies/show', {
      movie: movie
    })
  })
});

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id

  Movie.findById(id, (err, movie) => {
    res.render('movies/form', {
      movie: movie
    })
  })
});

router.post('/:id', (req, res, next) => {
  let id = req.params.id

  const updates = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  };

  Movie.findByIdAndUpdate(id, updates, (err, movie) => {
    if (err){ return next(err); }

    return res.redirect(`/movies/${movie._id}`);
  });
});

router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id

  Movie.findByIdAndRemove(id, (err, movie) => {
    if (err){ return next(err); }

    return res.redirect('/movies');
  });
});

module.exports = router;
