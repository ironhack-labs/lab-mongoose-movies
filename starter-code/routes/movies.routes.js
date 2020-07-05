const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
})

router.get('/movies/:id/delete', (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log('Successfully deleted Movie');
      res.redirect('/movies');
    })
    .catch(error => next(error))
})

router.get('/movies/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(actor => res.render('movies/edit', actor))
    .catch(error => next(error))
})

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(actor => {
      console.log(actor)
      res.render('movies/show', actor);
    })
    .catch(error => next(error))
})

router.post('/movies/:id', (req, res, next) => {
  const updatedMovie = req.body;
  updatedMovie.id = req.params.id;
  console.log({...updatedMovie});
  Movie.findByIdAndUpdate(updatedMovie.id, updatedMovie, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.redirect('/movies')
    }
  }) 
})

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(moviesDB => {
      console.log(moviesDB) 
      res.render('movies/index', moviesDB)
    })
    .catch(error => next(error))
})

router.post('/movies', (req, res, next) => {
  const data = req.body;
  const newMovie = new Movie(data);
  newMovie.save()
    .then(() => {
      res.redirect('/movies')
    })
    .catch(error => {
      console.log('Error while saving new Movie', error);
      res.redirect('/movies/new');
    })
})

module.exports = router;


