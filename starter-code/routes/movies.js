const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

router.get('/', (req, res, next) => {
  Movie.find()
  .then(movieDocs => {
    // console.log(movieDocs)
    res.render('movies/index', {movieDocs})
  })
  .catch(err => {
    next(err)
  })
})

router.get('/movie/:id', (req, res, next) => {
  const { id } = req.params

  Movie.findById(id)
  .then(movie => {
    console.log(movie)
    res.render('movies/show', movie)
  })
  .catch(err => {
    next(err)
  })
})

router.get('/new', (req, res, next) => {
  res.render('movies/new')
})

router.post('/new', (req, res, next) => {
  const { title, genre, plot } = req.body

  Movie.create({ title, genre, plot})
  .then(movieAdded => {
    res.redirect('/movies')
  })
  .catch(err => {
    next(err)
  })
})

router.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove({_id: req.params.id})
  .then(result => {
    res.redirect('/movies')
  })
  .catch(err => {
    next(err)
  })
})

module.exports = router