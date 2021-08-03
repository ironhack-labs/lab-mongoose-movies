const router = require('express').Router();
const mongoose = require('mongoose');

const Movie = require('../models/movie.model');
const Celebrity = require('../models/celebrity.model');

router.get('/movies/list', (req, res) => {
  Celebrity.find().then((allCelebs) => {
    const celebs = allCelebs;
    Movie.find().then((allMovies) => {
      res.render('movies/movie-list', { celebs: allCelebs, movies: allMovies });
    });
  });
});

router.post('/movies/new', (req, res) => {
  const { title, genre, plot, cast } = req.body;
  Movie.create({title, genre, plot, cast}).then(res.redirect('/'));
});
module.exports = router;
