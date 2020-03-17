const Movie = require('../models/Movie');
const express = require('express');
const moviesRouter  = express.Router();

moviesRouter.get('/', (req, res, next) => {
    Movie.find()
      .then(allTheMovieFromDB => {
         console.log('Retrieved movies from DB:', allTheMovieFromDB);
        res.render('movies/index', { movies: allTheMovieFromDB });
      })
      .catch(error => {
        console.log('Error while getting the celebrity from the DB: ', error);
      })
  });
  
  moviesRouter.get('/newMov', (req, res, next) => {
    res.render("movies/new");
  });
  
  
  moviesRouter.post('/newMov', (req, res, next) => {
    const { title, genre, plot} = req.body;
    const newMovie = new Movie({ title, genre, plot})
    newMovie.save()
    .then((movie) => {
      res.redirect('/movies');
    })
    .catch((error) => {
      console.log(error);
    })
  });
  
  
  moviesRouter.get('/showMov', (req, res, next) => {
    res.render("movies/show");
  });
  
  
  moviesRouter.get('/:moviesId', (req, res, next) => {
    console.log(req.params.moviesId)
    Movie.findById(req.params.moviesId)
      .then(theMovies => {
        res.render('movies/show', { movies : theMovies });
      })
      .catch(error => {
        console.log('Error while retrieving movie details: ', error);
      })
  });
  
  
  
  moviesRouter.get('/deleteMov/:moviesId', (req, res, next) => {
    console.log(req.params.moviesId)
    Movie.findByIdAndRemove(req.params.moviesId)
      .then(theMovie => {
        res.redirect('/movies');
      })
      .catch(error => {
        console.log('Error while retrieving movie details: ', error);
      })
  });
  module.exports = moviesRouter;