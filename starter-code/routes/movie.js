const express = require('express');
const router  = express.Router();
const MovieModel = require('../models/movie.js');

router.get('/movies', (req, res, next) => {
  MovieModel.find().exec().then(results => {
    res.locals.movies = results;
    res.render('movies/');
  }).catch(error => {
    next(error);
  });
});

router.get('/movies/:id', (req, res, next) => {
  MovieModel.findById(req.params.id).then(movieFromDb => {
    res.locals.movie = movieFromDb;
    res.render('movies/show');
  }).catch(error => {
    next(error);
  });
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/movies', (req, res, next) => {
  const newMovie = new MovieModel({
    title: req.body.movieTitle,
    genre: req.body.movieGenre,
    plot: req.body.moviePlot
  });
  newMovie.save().then(()=> {
    res.redirect('/movies');
  }).catch(error => {
    if(newMovie.errors){
      res.locals.validationErrors = newMovie.errors;
      res.render('movies/new');
    }else{
      next(error);
    }
  });
});

router.post('movies/:id/delete', (req, res, next) =>{
  MovieModel.findByIdAndRemove(req.params.id).then(removed => {
    res.redirect('/movies');
  }).catch(error =>{
    next(error);
  });
});

router.get('movies/:id/edit', (req, res, next) => {
  MovieModel.findById(req.params.id).then(results => {
    res.locals.movie = results;
    res.render('movies/edit');
  }).catch(error => {
    next(error);
  });
});

router.post('movies/:id', (req, res, next) =>{
  MovieModel.findById(req.params.id).then(movieToUpdate => {
    movieToUpdate.set({
      title: req.body.movieTitle,
      genre: req.body.movieGenre,
      plot: req.body.moviePlot
    });
    return movieToUpdate.save();
  }).then(() =>{
    res.redirect(`/movies/${req.params.id}`);
  }).catch(error => {
    next(error);
    });
});
module.exports = router;
