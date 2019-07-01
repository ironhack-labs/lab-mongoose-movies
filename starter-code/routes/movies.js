const express = require('express');
const router  = express.Router();
const { findMovies, findOneMovie } = require('../controllers/movies.controller')

router.get('/movies', findMovies)
router.get('/movies/:id', findOneMovie)

module.exports = router;