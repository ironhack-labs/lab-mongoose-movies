
const express = require('express');

const router = express.Router();
const Movie = require('../models/movie.js');

/* GET home page. */
router.get('/', (req, res, next) => {
  Movie.find()
    .then((movie) => {
      res.render('movies/index', {
        title: 'Movies List',
        movie
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/new', (req, res, next) => {
  res.render('movies/new', {
    title: 'New Movie'
  });
});

router.post('/new', (req, res, next) => {
  const newMovie = new Movie({
    Title: req.body.title,
    Plot: req.body.plot,
    Genre: req.body.genre
  });
  newMovie.save((err) => {
    if (err) {
      res.render('/new', {
        title: 'New Movie'
      });
    } else {
      res.redirect('/');
    }
  });
});

router.get('/:id', (req, res, next) => {
  Movie.findOne({ _id: req.params.id })
    .then((movies) => {
      res.render('movies/show', { title: 'Movie Details', movies });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/:id/edit', function (req, res, next) {
  Movie.findOne({ _id: req.params.id }, (err, theMovie) => {
    if (err) { return next(err); }

    res.render('movies/edit', {
      title: `Edit ${theMovie.name}`,
      movie: theMovie
    });
  });
});


router.post('/movies/:id', function (req, res, next) {
  const updatedMovie = {
    title: req.body.title,
    plot: req.body.plot,
    genre: req.body.genre
  };
  Movie.update({ _id: req.params.id }, updatedMovie, (err, theMovie) => {
    if (err) { return next(err); }

    res.redirect('/movies');
  });
});

router.post('/movies/:id/delete', function (req, res, next) {
  Movie.findOne({ _id: req.params.id }, (err, theMovie) => {
    if (err) { return next(err); }

    theMovie.remove((err) => {
      if (err) { return next(err); }

      res.redirect('/movies');
    });
  });
});


module.exports = router;
