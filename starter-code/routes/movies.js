const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');


router.get('/movies', (req, res) => {
  Movie.find()
    .then((movie) => {
      res.render('movies', { movie });
    })
    .catch(err => console.log(err));
});

router.get('/movies/:movieID', (req, res) => {
  Movie.findById(req.params.movieID)
    .then((movie) => {
      res.render('movie-page', movie);
    })
    .catch(err => console.log(err));
});

router.get('/movie/new', (req, res) => {
  res.render('movie-new');
});

router.post('/movie/new', (req, res) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  newMovie.save()
    .then(() => res.redirect('/movies'))
    .catch(err => console.log(err));
});

router.post('/movie/:movieID/delete', (req, res) => {
  const { movieID } = req.body;
  Movie.findByIdAndRemove(movieID)
    .then(() => {
      res.redirect('/movies');
    })
    .catch(err => console.log(err));
});

router.get('/movie/:movieID/edit', (req, res) => {
  Movie.findById(req.params.movieID)
    .then((movie) => {
      res.render('movie-edit', movie);
    })
    .catch(err => console.log(err));
});

router.post('/movie/:movieID/edit', (req, res) => {
  const { title, genre, plot } = req.body;
  Movie.update({ _id: req.params.movieID }, { $set: { title, genre, plot } })
    .then(() => {
      res.redirect('/movies');
    })
    .catch(err => console.log(err));
});


module.exports = router;
