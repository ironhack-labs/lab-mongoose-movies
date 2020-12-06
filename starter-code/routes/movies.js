const express = require('express');
const router  = express.Router();
const {
  getMovies, 
  getMovie,
  newMovie,
  createMovie,
  deleteMovie,
  editMovie,
} = require('../controllers/movies.controllers')

router.get('/', getMovies)
router.get('/new-movie', newMovie) //idem con celebrities, aquí sí funciona, debajo de ruta /:movieId no funciona. 
router.get('/:movieId', getMovie)
router.post('/', createMovie)
router.post('/:movieId/delete', deleteMovie)
router.post('/:movieId/edit', editMovie)


module.exports = router