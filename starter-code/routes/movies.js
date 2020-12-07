const { Router } = require('express')
const router = Router()
const {
  getMovies,
  getMovieDetails,
  newMovieView,
  createMovie,
  deleteMovie,
  editMovieView,
  updateMovie
} = require('../controllers/movies.controllers')

router
  .get('/', getMovies)
  .get('/new', newMovieView)
  .get('/:id', getMovieDetails)
  .get('/:id/edit', editMovieView)
  .post('/', createMovie)
  .post('/:id/delete', deleteMovie)
  .post('/:id', updateMovie)
  

    // .get('/new', newCelebView) // no entiendo muy bien por qué la ruta del /:id debe ir primero para que deje de dar CastError: Cast to ObjectId failed for value “new” at path “_id” for model “Celebreties”
    // .get('/:id', celebDetails)
    // .get('/:id/edit', editCelebView)
    // .post('/', createCeleb)
    // .post('/:id/delete', deleteCeleb)
    // .post('/:id', updateCeleb)

module.exports = router;