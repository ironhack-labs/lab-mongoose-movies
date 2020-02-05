const express = require('express');
const movieRouter = express.Router();

const Movie = require('../models/Movie.model');
const Celebrity = require('../models/Celebrity.model');



movieRouter.post('/movies/create', (req, res, next) => {
  Movie.create(req.body)
    .then(savedMovie => {
      console.log(`Saved movie is: `, savedMovie);
      res.redirect('/movies');
    })
    .catch(err => console.log(`Error while saving movie to DB: ${err}`));
});


movieRouter.get('/movies', (req, res, next) => {
  Movie.find()
    .then(moviesFromDB => {
      res.render('movies/movies', {
        movies: moviesFromDB
      });
    })
    .catch(err => console.log(err))
});


movieRouter.get('/movies/new', (req, res, next) => {
  Celebrity.find()
    .then(celebritiesFromDB => {
      res.render('movies/new-movie', {
        celebrities: celebritiesFromDB
      });
    })
    .catch(err => console.log(error));
});


movieRouter.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .populate('cast')
    .then(movieDetails => {
      res.render('movies/movie-details', {
        movie: movieDetails
      });
    })
    .catch(err => console.log(`Error while getting movie to DB: ${err}`));
});


movieRouter.get('/movies', (req, res, next) => {
  Celebrity.find()
    .then(celebritiesFromDB => {
      res.render('movies/movies', {
        celebrities: celebritiesFromDB
      });
    })
    .catch(err => console.log(error));
});















module.exports = movieRouter;