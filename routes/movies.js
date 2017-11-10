const express = require('express');
const Movie = require('../models/movie');

const router  = express.Router();


router.get('/movies', (req, res, next) => {
  Movie.find({}, (err, movies) => {
   if (err) { return next(err) }
   res.render('movies/index', {
     movies: movies
   });
 });
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.get('/movies/:id', (req, res, next) => {
  let id = req.params.id

  Movie.findById(id, (err, movie) => {
    res.render('movies/show', {
      movie: movie
    })
  })
});

router.post('/movies', (req, res, next) => {

  let movieInfo = {
    title: req.body._title,
    genre: req.body._genre,
    plot: req.body._plot
  };

  const newMovie = new Movie(movieInfo)


  newMovie.save( (err) => {
    if (err) {
      console.log(err);
      return res.redirect('/movies/new');
    } else {
      console.log('movie added');
      return res.redirect('/movies');
    }
  });

});

router.post('/movies/:id/delete', (req, res, next) => {
  let id = req.params.id

  Movie.findByIdAndRemove(id, (err, product) => {
    if (err){ return next(err); }

    return res.redirect('/movies');
  });
});

router.get('/movies/:id/edit', (req, res, next) => {
  let id = req.params.id

  Movie.findById(id, (err, movie) => {
    res.render('movies/edit', {
      movie: movie
    })
  })
});

router.post('/movies/:id', (req, res, next) => {
  let id = req.params.id

  const updates = {
    title: req.body._title,
    genre: req.body._genre,
    plot: req.body._plot
  };

  Movie.findByIdAndUpdate(id, updates, (err, movie) => {
    if (err){ return next(err); }

    return res.redirect('/movies');
  });
});

module.exports = router;
