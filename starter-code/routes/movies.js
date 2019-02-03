const express = require('express');
const mongoose = require('mongoose');
const Movie = require('../models/movie.js');

const app = require('../app');

const router = express.Router();

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((data) => {
      const movies = data;
      res.render('movies/index', { movies });
    })
    .catch((err) => {
      console.log('an error happened: ', err);
      next();
    });
});

router.get('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;
  Movie.findById(movieId)
    .then((data) => {
      const movie = data;
      res.render('movies/show', { movie, movieId });
    })
    .catch((err) => {
      console.log('an error happened: ', err);
      next();
    });
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/movies', (req, res, next) => {
  const newMov = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  };
  const newMovie = new Movie(newMov);
  newMovie.save()
    .then(() => {
      res.redirect('/movies');
    })
    .catch((err) => {
      console.log('an error happened: ', err);
      res.render('movies/new');
    });
});

router.post('/movies/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/movies');
    })
    .catch((err) => {
      console.log('An error happened: ', err);
      next();
    });
});

router.get('/movies/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render('movies/edit', { movie });
    })
    .catch((err) => {
      console.log('An error happened: ', err);
      next();
    });
});

router.post('/movies/:id', (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => {
      res.redirect('/movies');
    })
    .catch((err) => {
      console.log('An error happened: ', err);
      next();
    });
});

module.exports = router;
