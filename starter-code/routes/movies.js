const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')
const moviesController = require('../controllers/movies.controller');


router.post('/movies/:id/edit', moviesController.update)
router.get('/movies/:id/edit', moviesController.renderEdit)
router.post('/movies/:id/delete', moviesController.delete)
router.post('/movies/new', moviesController.new)
router.get('/movies/new', moviesController.renderNew)
router.get('/movies/:id', moviesController.show)
router.get('/movies', moviesController.list)

module.exports = router