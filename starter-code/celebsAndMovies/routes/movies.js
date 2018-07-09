const express = require('express');
const movieRouter  = express.Router();


const Movie = require('../models/movie');

/* GET movies page */
movieRouter.get('/index', (req, res, next) => {
  Movie.find()
    .then((theMovies) => {
      res.render('movies/index', { theMovies });
    })
    .catch((err) => {
      next(err);
    })
});


movieRouter.get('/new', (req, res, next) => {
  res.render('movies/new-movie');
});


movieRouter.post('/create', (req, res, next) => {
  const newMovie = new Movie(req.body);
  newMovie.save()
  .then((response) => {
    res.redirect('index');
  })
  .catch((err) => {
    console.log(err);
    next(err);
  })
});

movieRouter.get('/edit/:id', (req, res, next) => {
    res.render('movies/edit-movie');
});

movieRouter.post('/delete/:id', (req, res, next) => {
  console.log("entre");
  Movie.findByIdAndRemove(req.params.id)
  .then((response) => {
    res.redirect('index');
  })
  .catch((err) => {
    console.log(err);
    next(err);
  })
});


movieRouter.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((theMovie) => {
    res.render('movies/show', theMovie);
  })
  .catch((err) => {
    next(err);
  })
});



module.exports = movieRouter;
