const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');

const Movie = require('../../models/movies');

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies/index", {movies})
    })
    .catch(error => { console.log(error)})
});

router.get('/movies/new', function (req, res) {
  res.render('movies/new')
})

router.get('/movies/:id', function (req, res) {
  const theId = req.params.id
  Movie.findById({_id: theId})
    .then(movies => { 
      res.render('movies/show', { movies })
    })
    .catch(theError => { console.log(theError)})
  })

router.post('/movies/create', function (req, res) {
  const newMovie = new Movie({
    title: req.body.theTitle,
    genre: req.body.theGenre,
    plot: req.body.thePlot,
  })
  newMovie.save()
    .then(movies => { console.log(movies) })
    .catch(theError => { console.log(theError) })
    res.redirect('/movies')
})

router.post('/movies/:id/delete', function (req, res){
  Movie.findByIdAndRemove(req.params.id)
    .then(movies => { console.log(movies) })
    .catch(theError => { console.log(theError) })
    res.redirect('/movies')
})

router.get('/movies/:id/edit', function (req, res) {
  Movie.findById({_id: req.params.id})
  .then(movies => { 
    res.render('movies/edit', {movies: movies} )})
})

router.post('/movies/update/:id', function(req, res){
  Movie.findByIdAndUpdate(req.params.id, {
    title: req.body.theTitle,
    genre: req.body.theGenre,
    plot: req.body.thePlot,
  })
  .then(movies => { console.log(movies) })
  .catch(theError => { console.log(theError) })
  res.redirect('/movies')
  })





module.exports = router;