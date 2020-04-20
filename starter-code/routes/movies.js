const express = require('express')
const router = express.Router()

const {
  listMovieNames,
  specificMovie,
  newMovie,
  createMovie,
  deleteMovie,
} = require('../controllers/movies')

router.get('/', listMovieNames)
router.get('/new', newMovie)
router.post('/process', createMovie)

router.get('/:id', specificMovie)
router.post('/:id/delete', deleteMovie)

module.exports = router
