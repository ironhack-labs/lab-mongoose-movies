const express = require('express');

const Movie = require('../models/movie');
const router = express.Router();


router.get('/', (req, res, next) => {
  Movie.find({}, (err, movies) => {
      if (err) { return next(err) }
      res.render('movies/index', {
        moviesArray: movies
      });
    });
});


router.get('/new', (req, res, next) => {
  res.render('movies/new', {
    movie: new Movie()
  });
});

router.post('/', (req, res, next) => {
  const movieInfo = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  };

  const newMovie = new Movie(movieInfo);

  newMovie.save((err) => {
    if (err) {
      return res.render('movies/new', {
        movie: newMovie
      })
    }

    return res.redirect('/movies');
  });
});




router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id

  Movie.findByIdAndRemove(id, (err, movie) => {
    if (err){ return next(err); }

    return res.redirect('/movies');
  });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  Movie.findById(id, (err, movies) => {
    res.render('movies/show', {
      movies: movies
    })
  })
});

module.exports = router;
