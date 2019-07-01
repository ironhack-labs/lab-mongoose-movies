const express = require('express');
const router  = express.Router();
const { findMovies } = require('../controllers/movies.controller')

router.get('/movies', findMovies)

module.exports = router;