const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('../views/movies/index.hbs', {
        movies
      });
    })
    .catch(err => console.log(err));
});

router.get('/new', (req, res, next) => {
  res.render('../views/movies/new.hbs');
});

router.post('/', (req, res, next) => {
  const {
    title,
    genre,
    plot
  } = req.body;
  const newMovie = new Movie({
    title,
    genre,
    plot
  });
  newMovie.save()
    .then(_ => res.redirect('/movies'))
    .catch(_ => res.redirect('/movies/new'));
});

router.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(_ => res.redirect('/movies'))
    .catch(err => console.log(err));
});

router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('../views/movies/edit.hbs', {
        movie
      });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.post('/:id', (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.findOneAndUpdate({ _id: req.params.id }, { title, genre, plot }, { new: true })
  .then(_ => res.redirect('/movies'))
  .catch(err => {
    console.log(err);
    next();
  });
});

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('../views/movies/show.hbs', {
        movie
      })
    })
    .catch(err => console.log(err));
});

module.exports = router;