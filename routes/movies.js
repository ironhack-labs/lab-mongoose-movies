const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies', {
        "movies": movies
      });
    })
});

router.get('/new-movie', (req, res, next) => {
  res.render('newMovie');
});

router.post('/new-movie', (req, res, next) => {
  console.log("req.body", req.body);
  let newMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  }
  Movie.create(newMovie)
    .then(movie => {
      console.log("The movie was saved!!!");
      res.redirect('/movies/' + movie._id);
    })
});

router.post('/:id/delete-movie', (req, res, next) => {
  // console.log("The movie was deleted!!!:" +movie);
  Movie.findByIdAndRemove(req.params.id)
    .then(movie => {
      console.log("The movie was deleted!!!:" + movie);
      res.redirect('/movies');
    })
});


router.post('/:id/edit-movie', (req, res, next) => {
  let id = req.params.id;
  let movieData = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot

  }
  Movie.findByIdAndUpdate(id, movieData)
    .then(movie => {
      console.log("The movie was edited!!!");
      res.redirect('/movies/' + movie._id);
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movieFromDb => {
      console.log(movieFromDb)
      res.render('movie-details', {
        "movie": movieFromDb
      });
    })
});
module.exports = router;