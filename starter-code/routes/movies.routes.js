const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie-model');

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(allMovies => {
      res.render('movies/index.hbs', { allMovies });
    })
    .catch(err => next(err));
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/movies', (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create({ title, genre, plot })
    .then(result => {
      res.redirect('/movies');
    })
    .catch(err => {
      res.render('movies/new');
    });
});

router.post('/movies/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Movie.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/movies');
    })
    .catch(() => next());
});

router.get('/movies/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(movieUpdate => {
      res.render('/movies/edit.hbs', movieUpdate);
    })
    .catch(err => console.log(err));
});

router.post('/movies/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate(id, {
    title,
    genre,
    plot
  })
    .then(movieUpdate => {
      res.redirect('/movies');
    })
    .catch(err => console.log(err));
});

router.get('/movies/:id', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(movie => {
      res.render('movies/details.hbs', movie)
    })
    .catch(err => next(err));
});

module.exports = router;