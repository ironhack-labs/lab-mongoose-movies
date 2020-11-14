const { Router } = require('express')
const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')

// Movies List
router.get('/', (req, res, next) => {
  Movie
    .find({}, { title: 1 })
    .sort({ title: 1 })
    .then(all => res.render('movies', { all }))
    .catch(err => console.error(err))
})


// Movie Details –– READ
router.get('/details/:id', (req, res, next) => {
  Movie
    .findById(req.params.id)
    .then(elm => res.render('movies/read', elm))
    .catch(err => console.log(err))
})

// Movie Form - GET –– CREATE
router.get('/create-movie', (req, res, next) => res.render('movies/create'))

// Movie Form - POST –– CREATE
router.post('/create-movie', (req, res, next) => {
  Movie
    .create({ title, genre, plot } = req.body)
    .then(() => res.redirect('/movies'))
    .catch(err => console.error(err))
})


// Movie delete –– DELETE
router.get('/:id/delete', (req, res, next) => {
  Movie
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/movies'))
    .catch(err => console.error(err))
})


// Edit Movie form - GET –– UPDATE
router.get('/:id/edit', (req, res, next) => {
  Movie
    .findById(req.params.id)
    .then(elm => res.render('movies/update', elm))
    .catch(err => console.log(err))
})

// Edit Movie form - POST –– UPDATE
router.post('/:id/edit', (req, res, next) => {
  const movieId = req.params.id
  Movie
    .findByIdAndUpdate(movieId, { title, genre, plot } = req.body)
    .then(elm => res.redirect(`/movies/details/${ movieId }`))
    .catch(err => console.log(err))
})

module.exports = router
