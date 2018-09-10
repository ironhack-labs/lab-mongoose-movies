const express = require('express');
const router  = express.Router();
const Movie    = require('../models/movie')

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((movieInfo) => {
    res.render('movies/index', {listOfMovies: movieInfo})
  })
  .catch((err) => {
    next(err)
  })
})

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new')
})



router.post('/movies/create', (req, res, next) => {
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  })
  .then((response) => {
    res.redirect('/movies')
  })
  .catch((err) => {
    next(err);
  })
});

router.post('/movies/delete/:id', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
  .then((response) => {
    res.redirect('/movies')
  })
  .catch((err) => {
    next(err)
  })
})

router.post('/movies/update/:id', (req, res, next ) => {
  Movie.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  })
  .then((response) => {
    res.redirect('/movies/' + req.params.id)
  })
  .catch((err) => {
    next(errs)
  })
})

router.get('/movies/edit/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((aMovie) => {
    res.render('movies/edit', {theMovie: aMovie})
  })
  .catch((err) => {
    next(err)
  })
})

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((movieInfo)=>{
    res.render('movies/show', {movieDetails: movieInfo})
  })
  .catch((err)=>{
    next(err);
  })
});

module.exports = router;