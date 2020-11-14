const express = require('express')
const router = express.Router()


const Movie = require('../models/movie.model')
const { route } = require('./base.routes')



// ------ SEE ALL MOVIES

router.get('/', (req, res) => {
  Movie
    .find()
    .then(allMovies => res.render('movies/index', { allMovies }))
    .catch(err => console.log('Error with allMovies:', err))
})



// ------ CREATE NEW MOVIE

router.get('/new', (req, res) => res.render('movies/new-movie'))

router.post('/', (req, res) => {
  const { title, genre, plot } = req.body
  if (!title || !genre || !plot) {
    res.render('movies/new-movie', { errorMsg: 'Please fill in all information' })
    return
  }
  Movie
    .create({ title, genre, plot })
    .then(() => res.redirect('/movies'))
    .catch(err => console.log('There was an error creating movie:', err))
})



// ------ VIEW MOVIE DETAILS

router.get('/:movieId', (req, res) => {
  Movie
    .findById(req.params.movieId)
    .then(movieInfo => res.render('movies/show', { movieInfo }))
    .catch(err => console.log('There was an error with movieInfo:', err))
})



// ------ DELETE MOVIE


router.post('/:movieId/delete', (req, res) => {
  Movie
    .findByIdAndRemove(req.params.movieId)
    .then(() => res.redirect('/movies'))
    .catch(err => console.log('There was an error deleting a movie:', err))
})



// ------ EDIT MOVIE

router.get('/:movieId/edit', (req, res) => {
  Movie
    .findById(req.params.movieId)
    .then(editMovie => res.render('movies/edit', { editMovie }))
    .catch(err => console.log('Error editing movie:', err))
})

router.post('/:movieId', (req, res) => {
  const { title, genre, plot } = req.body
  Movie
    .findByIdAndUpdate(req.params.movieId, { title, genre, plot })
    .then(() => res.redirect('/movies'))
    .catch(err => console.log('There was an error editing a movie:', err)) 
})



module.exports = router
