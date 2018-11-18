const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  console.log('hola');
  Movie.find({})
  .then(movies => {
    res.render('movies/index',  {movies})
  })
  .catch(err => console.log(err))
});

// GET a specific movie
router.get('/movie/:id', (req, res, next) => {
  let movieId = req.params.id;
  console.log(movieId);
  Movie.find({_id: movieId})
  .then(movie => {
    res.render('movies/movie', {movie})
  })
  .catch(err => console.log(err))
});

// GET new movie page
router.get('/new', (req, res, next) => {
  res.render('movies/newMovie');
});

// POST new movie
router.post('/new', (req, res, next) => {
  Movie.create({...req.body})
  .then(movie => {
    console.log(movie);
    res.redirect('/movies');
  })
  .catch(err => console.log(err))
});

// Delete movie
router.get('/movie/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove({_id: req.params.id})
  .then(() => res.redirect('/movies'))
  .catch(err => console.log(err))
});



// GET edit celebrity page
router.get('/movie/:id/edit', (req, res, next) => {
  let movieId = req.params.id;
  Movie.find({_id: movieId})
  .then(movie => {
    res.render('movies/edit', {movie})
  })
  .catch(err => console.log(err))
});


// POST Edit Celebrity
router.post('/:id', (req, res, next) => {

  console.log(req.params.id);
  console.log(req.body)

  Movie.update({_id: req.params.id}, { $set: {title: req.body.title, genre: req.body.genre, plot: req.body.plot }})
  .then(() => {
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log(error);
  })

  // console.log('hola');
});





module.exports = router;