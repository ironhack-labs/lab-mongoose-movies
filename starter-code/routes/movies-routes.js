const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.model')
const moviesController = require('../controllers/movies.controller');

router.post('/movies/:id/delete', moviesController.delete)
router.post('/movies/:id/edit', moviesController.edit)
router.get('/movies/:id/edit', moviesController.editView)
router.post('/movies/create', moviesController.create)
router.get('/movies/create', moviesController.createView)
router.get('/movies/:id', moviesController.detail)
router.get('/movies', moviesController.list)

module.exports = router;