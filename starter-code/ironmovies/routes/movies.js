const express = require('express');
const Movie= require('../models/movie');

const router  = express.Router();

router.get('/', (req, res, next) => {
  Movie.find({}, (err, result) => {
    if (err) { return next(err) }
    console.log(result)
    res.render('movies/index', {

      movies: result
    });
  });
});

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});


router.get('/:id', (req, res, next) => {
  let id = req.params.id
  Movie.findById(id, (err, details) => {
    console.log(details)
    res.render('movies/show', {

      movies: details

    })
  })
});

router.post('/', (req, res, next) => {
  const movieCreated = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  };

  // Create a new Product with the params
  const movie = new Movie(movieCreated);

  movie.save((err) => {
    if (err) {
      return res.render('movies/new', {
        movies: movies
      })
    }

    return res.redirect('/movies');
  });
});

router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id

Movie.findByIdAndRemove(id, (err, mov) => {
    if (err){ return next(err); }

    return res.redirect('/movies');
  });
});







module.exports = router;
