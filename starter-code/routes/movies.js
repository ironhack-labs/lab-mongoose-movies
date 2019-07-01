const express = require('express');
const router  = express.Router();
const { findMovies, findOneMovie, getCreateOneMovie, postCreateOneMovie } = require('../controllers/movies.controller')

router.get('/movies', findMovies)
router.post('/movies', postCreateOneMovie)
router.get('/movies/new', getCreateOneMovie)
router.get('/movies/:id', findOneMovie)

module.exports = router;