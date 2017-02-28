const express = require('express');
const router  = express.Router();
const Movie = require('../models/movieModel.js');

//Showing the movies
router.get('/movies', (req, res, next) => {

  Movie.find({}, {}, (err, result) => {

    res.render('movies/index', {
      result: result
    });
  });
});


// CREATING A NEW MOVIE
// Sends to the form
router.get('/movies/new', (req, res, next) => {

  res.render('movies/new');
});

//Receives the form
router.post('/movies/new', (req, res, next) => {

  const newMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };

  const thisMovie = new Movie(newMovie);

  thisMovie.save((err) => {
    if (err) {
      next(err);
      return;
    }

    res.redirect('/movies');
  });
});

//Show details of movie clicked
router.get('/movies/:id', (req, res, next) => {
  let celebId = req.params.id;

  Movie.findById(celebId, (err, oneCeleb) => {
    if (err) {
      next(err);
      return;
    }

    res.render('movies/show', {
      result: oneCeleb
    });
  });
});

module.exports = router;
