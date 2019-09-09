const express = require('express');
const router = express.Router()
const {catchErrors} = require('../middlewares/catchErrors')
const { home } = require('../controllers/index.controller')
const {
  listCelebrities,
  detailCelebrity,
  addCelebrityForm,
  addCelebrity,
  deleteCelebrity
} = require('../controllers/celebrities.controller')

const {
  listMovies,
  detailMovie,
  addMovieForm,
  addMovie,
  deleteMovie
} = require('../controllers/movies.controller')

/* GET home page */
router.get('/', home );

router.get('/celebrities', listCelebrities)
router.get('/celebrities/:id', detailCelebrity)
router.get('/celebrities/new', addCelebrityForm)
router.post('/celebrities', catchErrors(addCelebrity))
router.post('/celebrities/:id/delete', deleteCelebrity)


router.get('/movies', listMovies)
router.get('/movies/:id', detailMovie)
router.get('/movies/new', addMovieForm)
router.post('/movies', catchErrors(addMovie))
router.post('/movies/:id/delete', deleteMovie)

module.exports = router;