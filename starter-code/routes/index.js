const express = require('express')
const router = express.Router()
const {
  findCelebrities,
  findOneCelebrity,
  viewCreateCelebrity,
  createNewCelebrity,
  deleteCelebrity
} = require('../controllers/celebrities.controller')

const {
  findMovies,
  findOneMovie,
  viewCreateMovie,
  createNewMovie,
  deleteMovie
} = require('../controllers/movies.controller')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/celebrities', findCelebrities)

router.get('/celebrities/new', viewCreateCelebrity)

router.get('/celebrities/:id', findOneCelebrity)

router.post('/celebrities', createNewCelebrity)

router.get('/celebrities/:id/delete', deleteCelebrity)

router.get('/movies', findMovies)

router.get('/movies/new', viewCreateMovie)

router.get('/movies/:id', findOneMovie)

router.post('/movies', createNewMovie)

router.get('/movies/:id/delete', deleteMovie)

module.exports = router
