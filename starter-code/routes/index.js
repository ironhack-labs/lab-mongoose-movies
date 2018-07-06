const express = require('express');

const Movie = require('../models/movie');

const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Your Favorite Movies' });
});

router.get('/movies', (req, res, next) => {
  const movies = Movie.find({}, (err, movies) => {
    if (err) { return next(err); }
    res.render('list', {movies: movies});
  });
});

router.post('/movies', (req, res, next) => {
  const movieInfo = {
      title: req.body.title,
      genre: req.body.genre,
      year: req.body.year
    }
  // Add a new Movie with the params
   const newMovie = new Movie(movieInfo);
   newMovie.save( (err) => {
     if (err) {
       res.render('new', {hasErrors: true, err: err, errors: newMovie.errors})
     } else {
       // redirect to the list of products if it saves
       return res.redirect('/movies');
     }
   });
  });

router.get('/movies/new', (req, res, next) => {
  res.render('new', {hasErrors: false});
});

// Show a Movie
router.get('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId, (err, movie) => {
    if (err) { return next(err);}
    res.render('movies/show', { movie: movie });
  });
});

//Edit a Movie
router.get('/movies/:id/edit', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId, (err, movie) => {
    if (err) {return next (err); }
    res.render('edit', { movie: movie });
  });
});

router.post('/movies/:id/update', (req, res, next) => {
  const movieId = req.params.id;
  const updates = {
    title: req.body.title,
    genre: req.body.genre,
    year: req.body.year
  };

  Movie.findByIdAndUpdate(movieId, updates, (err, movie) => {
    if (err) { return next (err); }
    return res.redirect('/movies')
  });
});

// Delete a Movie
router.get('/movies/:id/delete', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findByIdAndRemove(movieId, (err, movie) => {
     if (err){ return next(err); }
     return res.redirect('/movies');
   });
});

module.exports = router;
