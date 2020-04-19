const express = require('express')
const router = express.Router()
// const Celebrity = require('../models/Celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})
//--------------Celebrity Routes---------------------
const {
  listView,
  detailView,
  addView,
  addCelebrity,
  deleteCelebrity,
} = require('../controllers/celebrity')

router.get('/celebrities', listView)
router.get('/celebrities/add', addView)
router.post('/celebrities', addCelebrity)
router.post('/celebrities/:id/delete', deleteCelebrity)
router.get('/celebrities/:id', detailView)

//----------------Movie Routes-------------------

const {
  listMovieView,
  detailMovieView,
  addMovieView,
  addMovie,
  deleteMovie,
} = require('../controllers/movies')

router.get('/movies', listMovieView)
router.get('/movies/addMovie', addMovieView)
router.post('/movies', addMovie)
router.post('/movies/:id/delete', deleteMovie)
router.get('/movies/:id', detailMovieView)

module.exports = router
