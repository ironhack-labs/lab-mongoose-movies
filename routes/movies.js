const express = require('express');

const Movie = require('../models/movie.js');
// const Movie = require('../models/movie.js');
const router = express.Router();


router.get('/movies', (req, res, next) => {
  Movie.find((err, movies) => {
    if (err) {
      next(err);
      return;
    }
    console.log(movies);
      // display views/movies/index.ejs
    res.render('movies/index', {
      movies: movies
    });
  });
});

router.get('/movies/new', (req, res, next) => {
    // display views/movies/new.ejs
  res.render('movies/new');
});

router.post('/movies', (req, res, next) => {
  const movieInfo = {
    name: req.body.name,
    genre: req.body.genre,
    plot: req.body.plot
  };

  const theMovie = new Movie(movieInfo);

  theMovie.save((err) => {
    if (err) {
      res.render('movies/new');
      // next(err);
      // return;
    }
    res.redirect('/movies');
  });
});

router.get('/movies/:id/edit', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId, (err, movieDoc) => {
    if (err) {
       next(err);
       return;
     }
    res.render('movies/edit', {
      movie: movieDoc
    });
  });
});

router.post('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;
  const movieUpdates = {
    name: req.body.name,
    genre: req.body.genre,
    plot: req.body.plot,
};
  // db.movies.updateOne({ _id: movie }, { $set: movieUpdates })
  Movie.findByIdAndUpdate(movieId, movieUpdates, (err, movie) => {
    if (err){
      next(err);
      return;
    }
      res.redirect('/movies');
    });
  });

router.post('/movies/:id/delete', (req, res, next) => {
  const movieId = req.params.id;


  Movie.findByIdAndRemove(movieId, (err, movie) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect('/movies');
  });
});

router.get('/movies/:id', (req, res, next) => {
  let movieId = req.params.id;

  Movie.findById(movieId, (err, movieDoc) => {
    if (err) {
      next(err);
      return;
    }
    res.render('movies/show', {
      movie: movieDoc
    });
  });
});

module.exports = router;
