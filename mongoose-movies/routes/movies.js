/*jshint esversion: 6*/

const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

/*GET ALL MOVIES*/
router.get('/', (req, res, next) => {
  Movie.find({}, (err, movies) => {
    if(err) {return next(err);}
    res.render('movies/index', {
      movies: movies
    });
  });
});

/*GET ADD NEW MOVIE*/
router.get('/new', (req, res) => {
  res.render('movies/new');
});

/*GET DETAILS OF EACH MOVIE*/
router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id, (err, movie) => {
    if(err) {return next(err);}
    res.render('movies/show', movie);
  });
});

/*POST ADD NEW MOVIE*/
router.post('/', (req, res, next) => {
  const newMovieInfo = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  const newMovie = new Movie (newMovieInfo);
  newMovie.save((err) => {
    if(err) {res.redirect('/new');}
    return res.redirect('/movies');
  });
});

/*POST DELETE A MOVIE*/
router.post('/:id/delete', (req, res, next) => {
  const movieId = req.params.id;
  Movie.findByIdAndRemove(movieId, (err, movie) => {
    if(err) {return next(err);}
    res.redirect('/movies');
  });
});

/*GET EDIT A MOVIE*/
router.get('/:id/edit', (req, res, next) => {
  const movieId = req.params.id;
  Movie.findById(movieId, (err, movie) => {
    if(err) {return next(err);}
    res.render('movies/edit', movie);
  });
});

/*POST EDIT A MOVIE*/
router.post('/:id', (req, res, next) => {
  const movieId = req.params.id;
  const movieInfo = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  Movie.findByIdAndUpdate(movieId, movieInfo, (err, movie) => {
    if(err) {return next(err);}
    res.redirect('/movies');
  });
});

module.exports = router;
