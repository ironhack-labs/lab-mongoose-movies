const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const Movie = require('../models/movie.model')

router.get('/movies', (req, res) => {

  Movie
    .find()
    .then(movies => {
      res.render('movies/index', { movies })
    }) //, error: req.query.error }))
    .catch(err => console.log('ERROR:', err))
})

router.get('/movie/:movie_id', (req, res) => {

  const movie_id = req.params.movie_id

  Movie
    .findById(movie_id)
    .then(movie => res.render('movies/show', movie))
    .catch(err => console.log(err))
})

router.get('/movies/new', (req, res) => res.render('movies/new'))

router.post('/movies/new', (req, res) => {

  console.log(req.body)

  const { title, genre, plot } = req.body

  Movie
    .create({ title, genre, plot })
    .then(movie => res.redirect(`/movies`))
    .catch(err => console.log(err))
})

router.post('/movies/:id/delete', (req, res) => {

  const celebs_id = req.params.id

  Movie
    .findByIdAndRemove(celebs_id)
    .then(movie => res.redirect(`/movies`))
    .catch(err => console.log(err))
})


router.get('/movies/:id/edit', (req, res) => {

  const movie_id = req.params.id
  Movie
    .findById(movie_id)
    .then(movie => res.render('movies/edit', movie))
    .catch(err => console.log(err))
})

router.post('/movies/:id/edit', (req, res) => {

  const { title, genre, plot } = req.body
  const movie_id = req.params.id

  Movie
    .findByIdAndUpdate(movie_id, { title, genre, plot })
    .then(movie => res.redirect(`/movies`))
    .catch(err => console.log(err))
})



module.exports = router