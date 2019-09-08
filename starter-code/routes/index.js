const express = require('express')
const router = express.Router()
const { home } = require('../controllers')
const {
  getCelebrities,
  getCelebrity,
  newCelebrityForm,
  newCelebrity,
  deleteCelebrity
} = require('../controllers/celebrities')
const { getMovies, getMovie, newMovieForm, newMovie, deleteMovie } = require('../controllers/movies')

router.get('/', home)

router.get('/celebrities', getCelebrities)
router.get('/celebrities/:id', getCelebrity)
router.get('/celebrity/new', newCelebrityForm)
router.post('/celebrities', newCelebrity)
router.post('/celebrities/:id/delete', deleteCelebrity)

router.get('/movies', getMovies)
router.get('/movies/:id', getMovie)
router.get('/movie/new', newMovieForm)
router.post('/movies', newMovie)
router.post('/movies/:id/delete', deleteMovie)

module.exports = router
