const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');


router.get('/movies', (req, res, next) => {

  Movie.find()
    .then(movies => {
      console.log(movies);
      res.render("movies/index", { movies });
    })
    .catch(error => {
      console.log(error);
      next(err);
    })
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.get('/movies/:id', (req, res, next) => {

  Movie.findById(req.params.id)
    .then(movie => {
      console.log(movie);
      res.render('movies/show', { movie });
    })
    .catch(err => {
      console.error(err);
    })
});

router.get('/movies/:id/edit', (req, res, next) => {

  Movie.findById(req.params.id)
    .then(movie => {
      console.log(movie);
      res.render('movies/edit', { movie });
    })
    .catch(err => {
      console.error(err);
    })
});

router.post('/movies', (req, res, next) => {
  const newMovie = new Movie();

  if (req.body.title == '' || req.body.genre == '' || req.body.plot == '') {
    res.redirect('/movies/new');
  }

  newMovie.title = req.body.title;
  newMovie.genre = req.body.genre;
  newMovie.plot = req.body.plot;

  newMovie.save()
    .then(movie => {
      console.log(movie);
      res.redirect('/movies');
    })
    .catch(err => console.log(err));
});

router.post('/movies/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(movie => {
      console.log(movie);
      res.redirect('/movies');
    })
    .catch(err => console.log(err));
});

router.post('/movies/:id', (req, res, next) => {
  const editMovie = new Movie();

  if (req.body.title == '' || req.body.genre == '' || req.body.plot == '') {
    res.redirect('/movies/edit');
  }

  editMovie.title = req.body.title;
  editMovie.genre = req.body.genre;
  editMovie.plot = req.body.plot;

  Movie.findByIdAndUpdate(req.params.id, editMovie)
    .then(movie => {
      console.log(movie);
      res.redirect('/movies');
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/movies/${req.params.id}/edit`);
    })
});

module.exports = router;