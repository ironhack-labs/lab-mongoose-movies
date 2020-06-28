const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')
const { findByIdAndDelete } = require('../models/movie.model')

router.get('/list', (req, res) => {
  
  Movie.find()
  .then(allMovies => res.render('movies/index', { allMovies }))
  .catch(err => console.log("Error in DB", err))
})
router.get('/details/:id', (req, res) => {
  Movie
  .findById(req.params.id)
  .then(theMovie => res.render('movies/show', theMovie))
  .catch(err => console.log("Error in DB", err))
})
router.get('/new', (req, res) => {
  res.render('movies/new',)
})
router.post('/new', (req, res) => {
  const { title, genre, plot } = req.body
  
  Movie
  .create({ title, genre, plot })
  .then(() => res.redirect('/movies/list'))
  .catch(err => console.log("Error in DB", err))
  
})
router.post('/:id/delete', (req, res) => {
  Movie
  .findByIdAndRemove(req.params.id)
  .then(() => res.redirect('/movies/list'))
  .catch(err => console.log("Error in DB", err))

})
router.get('/:id/edit', (req, res) => {
  Movie
  .findById(req.params.id)
    .then(theMovie => res.render('movies/edit', theMovie))
  .catch(err => console.log("Error in DB", err))
})
router.post('/edit/:id', (req, res) => {
  const { title, genre, plot } = req.body

  Movie
  .findByIdAndUpdate(req.params.id, { title, genre, plot }, { new: true })
  .then(() => res.redirect(`/movies/details/${req.params.id}`))
  .catch(err => console.log("Error in DB", err))

})
module.exports = router