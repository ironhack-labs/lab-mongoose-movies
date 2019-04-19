const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');



router.post('/movies/:id/delete', (req, res, next) => {
  const id = req.params.id
  Movie.findByIdAndDelete(id)
  .then(() => {res.redirect('/movies')}
  )
  .catch(err => next(err));
})

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new')
});

router.get('/movies/:id/edit', (req, res, next) => {
  const id = req.params.id
  Movie.findByIdAndUpdate(id)
  .then(movie => {
    res.render('movies/edit', {movie})
  })
  .catch(err => next(err))
})

router.get('/movies/:id', (req, res, next) => {
  const id = req.params.id;
  Movie.findById(id)
  .then(movie => {
    res.render('movies/show', {movie})
  })
  .catch(err => next(err));
})

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies/index', {movies})
    })
    .catch(err => next(err));
})

router.post('/movies/:id', (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate({ _id: req.params.id}, { $set: { title, genre, plot }}, { new: true })
    .then(()=> {
      res.redirect('/movies')
    })
    .catch(err => next(err));
});

router.post('/movies', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie ({ title, genre, plot})
  newMovie.save()
  .then(() => {
    res.redirect('/movies')
    console.log('movie add to DB')
  })
  .catch(
    res.render('movies/new'),
    err => next(err)
    );
})
module.exports = router