const express = require('express')
const router = express.Router()

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

const {
  celebViews,
  detailGet,
  addCeleb,
  sendCeleb,
  deleteMethod,
} = require('../controllers/celebrities')

router.get('/celebrities', celebViews)
router.get('/celebrities/new', addCeleb)
router.post('/celebrities', sendCeleb)
router.get('/celebrities/:id', detailGet)
router.post('/celebrities/:id/delete', deleteMethod)

const { movieViews, movieGet, addMovie, sendMovie, deleteMovie } = require('../controllers/movies')

router.get('/movies', movieViews)
router.get('/movies/new', addMovie)
router.post('/movies', sendMovie)
router.get('/movies/:id', movieGet)
router.post('/movies/:id/delete', deleteMovie)

module.exports = router
