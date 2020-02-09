const express = require('express');
const router  = express.Router();
const Movie = require(`../models/Movie`)

router.get('/', (req, res, next) => {
  Movie.find().then((allMovies) =>{
  res.render('movies/index', {allMovies});
  })
});

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.get('/:id', (req, res, next) => {
  Movie.findOne({ _id: req.params.id })
    .then((movieFound) => {
      res.render('movies/show', movieFound)
    })
});

router.post('/', (req, res, next) => {
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  })
  .then(() => {
    res.redirect('/movies')
  })
});

router.post('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render('movies/edit', movie)
    })
    .catch(() => {
      next()
    })
});

router.post('/movies/:id', (req, res, next) => {
  Movie.findByIdAndUpdate(
    req.body.id,
    {
      titel: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    },
    { new: true }
  ).then(() => {
    res.redirect('/movies');
  });
});

router.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.body.id)
    .then(() => {
      res.redirect('/movies')
    })
    .catch(() => {
      next()
    })
});

module.exports = router;