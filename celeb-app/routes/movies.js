const express = require('express');
const Movie = require('../model/movie.js');
const router = express.Router();

router.get('/movies', (req, res, next) => {
  Movie.find((err, movies) => {
    if (err) {
      next(err);
      return;
    }
    res.render('movies/index',
    {movies: movies,
    title: 'Home Movies Page'
  });
  });
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new',
  { title: 'Make New Movie'
});
});

router.post('/movies/new', (req, res, next) => {
  const movieInfo = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  const theMovie = new Movie(movieInfo);

  theMovie.save((err) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect('/movies');
  });
});

router.get('/movies/:id',(req, res, next) => {
  let movieId = req.params.id;
  Movie.findById(movieId, (err, movies) => {
    if (err) {
      next(err);
      return;
    }
    res.render('movies/show', {
      movies: movies,
      title: 'Details of movie'
    });
  });
});

router.post('/movies/:id/delete', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findByIdAndRemove(movieId, (err) => {
    if(err) {
      next(err);
      return;
    }
    res.redirect('/movies');
  });
});

router.get('/movies/:id/edit',(req, res, next) => {
  const movieId = req.params.id;
  Movie.findById(movieId, (err, movies) => {
    if (err) {
      next(err);
      return;
    }
    res.render('movies/edit', {
      movies: movies,
      title: 'Edit Details of movie'
    });
  });
});

router.post('/movies/:id',(req, res, next) => {
  const movieId = req.params.id;
  const updates = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  Movie.findByIdAndUpdate(movieId, updates, (err) => {
    if(err) {
      next(err);
      return;
    }
    res.redirect('/movies');
  });
});

module.exports = router;
