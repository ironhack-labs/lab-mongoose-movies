const express = require('express');
const router  = express.Router();
const mongoose     = require('mongoose');
const Movie = require('../models/movie.js');

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("./movies", {movies});
    })
    .catch(error => {
      console.log(error)
    })
});

router.get('/movies/new', (req, res, next) => {
      res.render("./movies/new");
});

router.post('/movies', (req, res, next) => {
  let newMovie = new Movie({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  })

  newMovie.save()
    .then(celebrities => {
      res.redirect("./movies");
    })
    .catch(error => {
      console.log(error);
      res.render("./movies/new");
    })
});

router.post('/movies/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove({_id: req.params.id})
    .then(movies => {      
      res.redirect("/movies");      
    })
    .catch(error => {
      console.log(error);
    })
});

router.get('/movies/:id/edit', (req, res, next) => {
  Movie.findById({_id: req.params.id})
    .then(movies => {
      
        res.render("./movies/edit", {movies});
   
    })
    .catch(error => {
      console.log(error);
    })
});

router.get('/movies/:id', (req, res, next) => {
  Movie.findById({_id: req.params.id})
    .then(movies => {
      res.render("./movies/show", {movies});
    })
    .catch(error => {
      console.log(error)
    })
});

router.post('/movies/:id', (req, res, next) => {
  let updatedMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }

  Movie.findByIdAndUpdate( req.params.id, {$set: updatedMovie})
    .then(movies => {
        res.redirect("./");
    })
    .catch(error => {
      console.log(error);
    })
});

module.exports = router;