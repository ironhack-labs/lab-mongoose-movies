const express = require('express');
const Movie =require('../models/Movie')
const moviesRouter = express.Router()



moviesRouter.get('/', (req, res, next) => {
  Movie.find()
    .then(allMoviesFromDB => {
      
      res.render('movies/index', { movies: allMoviesFromDB });
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
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



moviesRouter.get('/show', (req, res, next) => {
  res.render("movies/show");
});
moviesRouter.get('/:moviesId', (req, res, next) => {
  console.log(req.params.moviesId)
  Movie.findById(req.params.moviesId)
    .then(theMovies => {
      res.render('movies/show', { movies : theMovies });
    })
    .catch(error => {
      console.log('Error while retrieving book details: ', error);
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



module.exports = moviesRouter