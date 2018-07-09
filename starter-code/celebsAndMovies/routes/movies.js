const express = require('express');
const movieRouter  = express.Router();

const Movie = require('../models/movie');


//READ: GET MOVIES FROM DATABASE AND DISPLAY
movieRouter.get('/index', (req, res, next) => {
  Movie.find()
    .then((theMovies) => {
      res.render('movies/index', { theMovies });
    })
    .catch((err) => {
      next(err);
    })
});


//CREATE: RENDER FORM TO FILL AND CREATE MOVIE
movieRouter.get('/new', (req, res, next) => {
  res.render('movies/new-movie');
});


//CREATE: SEND FILLED FORM WITH DATA(req.body) AND SAVE IN DATABASE
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


//UPDATE: RENDER FORM PREFILLED AND EDIT IN DATABASE
movieRouter.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((theMovie) => {
    res.render('movies/edit-movie', theMovie);
  })
  .catch((err) => {
    next(err);
  })
});


//UPDATE: SEND THE NEW INFO TO DATABASE TO UPDATE
movieRouter.post('/:id/update', (req, res, next) => {
  Movie.findOneAndUpdate({_id : req.params.id},req.body)
  .then((response) => {
    res.redirect('/movies/index');
  })
  .catch((err) => {
    console.log(err);
    next(err);
  })
});


//DELETE
movieRouter.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
  .then((response) => {
    res.redirect('/movies/index');
  })
  .catch((err) => {
    console.log(err);
    next(err);
  })
});


//READ: SHOW AN SPECIFIC MOVIE
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