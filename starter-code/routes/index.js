const express = require('express')
const {
  getCelebrities,
  getOneCelebritie,
  createCelebritie,
  celebritieForm,
  deleteCelebritie,
  movieForm,
  createMovie,
  deleteMovie,
  getMovies,
  getOneMovie
} = require('./../controllers/index.controllers')
const router = express.Router()

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

router.post('/celebrities/:id/delete', deleteCelebritie)

router.get('/celebrities', getCelebrities)

router.get('/celebrities/new', celebritieForm)

router.get('/celebrities/:id', getOneCelebritie)

router.post('/celebrities', createCelebritie)

// -------- MOVIES -------
router.post('/movies/:id/delete', deleteMovie)

router.get('/movies', getMovies)

router.get('/movies/new', movieForm)

router.get('/movies/:id', getOneMovie)

router.post('/movies', createMovie)

module.exports = router
