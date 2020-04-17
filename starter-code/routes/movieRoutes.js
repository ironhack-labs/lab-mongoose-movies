const express = require('express');
const router = new express.Router();
const Movie = require('../models/movie');

// READ ALL

router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then((dbRes) => {
      res.render('movies/index.hbs', {
        movies: dbRes,
      });
    })
    .catch((next) => {
      console.log(next);
    });
});

// ADD ONE

router.get('/movies/new', (req, res) => {
  res.render('movies/new');
});

router.post('/movies', (req, res) => {
  Movie.create(req.body)
    .then((dbRes) => {
      res.redirect('/movies');
    })
    .catch((err) => console.log(err));
});

// UPDATE ONE

router.get('/movies/:id/edit', (req, res) => {
  Movie.findById(req.params.id)
    .then((dbRes) => {
      res.render('movies/edit.hbs', {
        movie: dbRes,
      });
    })
    .catch((err) => console.log(err));
});

router.post('/movies/:id/edit', (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((dbRes) => {
      res.redirect('/movies');
    })
    .catch((err) => console.log(err));
});

// DELETE ONE

router.post('/movies/:id/delete', (req, res) => {
  Movie.findByIdAndDelete(req.params.id)
    .then((dbRes) => {
      res.redirect('/movies');
    })
    .catch((err) => console.log(err));
});

// READ ONE

router.get('/movies/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then((dbRes) => {
      res.render('movies/show.hbs', {
        movie: dbRes,
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
