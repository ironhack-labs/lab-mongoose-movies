const express = require('express')
const router = express.Router()
const {
  findCelebs,
  findOneCeleb,
  createCeleb,
  viewCreateCeleb,
  deleteCeleb
} = require('../controllers/celebs.controller')

const {
  findMovies,
  findOneMovie,
  createMovie,
  viewCreateMovie,
  deleteMovie
} = require('../controllers/movies.controller')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

//get celebs
router.get('/celebrities', findCelebs)

//get add celeb
router.get('/celebrities/new', viewCreateCeleb)

//post celebrity
router.post('/celebrities/new', createCeleb)

//get celebs detail
router.get('/celebrities/:id', findOneCeleb)

router.get('/celebrities/:id/delete', deleteCeleb)

//get movies
router.get('/movies', findMovies)

//get add movies
router.get('/movies/new', viewCreateMovie)

//post movies
router.post('/movies/new', createMovie)

//get movies detIL
router.get('/movies/:id', findOneMovie)

router.get('/movies/:id/delete', deleteMovie)

module.exports = router
