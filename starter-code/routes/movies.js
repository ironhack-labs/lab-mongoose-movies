const express = require('express');
const router  = express.Router();
const Movie = require("../models/movie.js");

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies => res.render('movies/index', {movies}))
  .catch(err => console.log(err))
});

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie => res.render('movies/show', {movie}))
  .catch(err => {
    console.log(err)
    next();
  })
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.get('/movies/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movie => res.render("movies/edit",{movie}))
    .catch(err => console.log(err))
});

router.post('/movies', (req, res, next) => {
  Movie.create({title: req.body.title, genre: req.body.genre, plot: req.body.plot})
  .then(movie => res.redirect("/movies"))
  .catch(err => {
    console.log(err)
    res.render("movies/new")
  })
});

router.post('/movies/:id', (req, res, next) => {
    Movie.update({_id:req.params.id},{$set:{title: req.body.title, genre: req.body.genre, plot: req.body.plot}})
    .then(movie => res.redirect("/movies"))
    .catch(err => {
      console.log(err)
      next();
    })
  });

router.post('/movies/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
  .then(movie => res.redirect('/movies'))
  .catch(err => {
    console.log(err)
    next();
  })
});

module.exports = router;