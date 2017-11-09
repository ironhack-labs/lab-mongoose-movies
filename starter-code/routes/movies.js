const express = require('express');
const Movie = require('../models/movies');

const router  = express.Router();

router.get('/', (req, res, next) => {
  Movie.find({}, (err, movies) => {
    if (err) { return next(err) }

    res.render('movies/index', {
      movies : movies
    });
  });
});

router.get('/new', (req, res, next) => {
  res.render('movies/new', {
    movie: new Movie()
  });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id
  Movie.findById(id, (err, movie) => {
    res.render('movies/show', {
      movie : movie
    })
  })
});

router.post('/', (req, res, next) => {
  const movieInfo = {
    title: req.body.title,
    genre : req.body.genre,
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

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id

  Movie.findById(id, (err, movie) => {
    res.render('movies/edit', {
      movie : movie
    })
  })
});

router.post('/:id', (req, res, next) => {
  let id = req.params.id

  const updates = {
    title: req.body.title,
    genre : req.body.genre,
    plot: req.body.plot,
  };

  Movie.findByIdAndUpdate(id, updates, (err, movie) => {
    if (err){ return next(err); }

    return res.redirect(`/movies/${movie._id}`);
  });
});



module.exports = router;
