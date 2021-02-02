const express = require('express')
const router = express.Router()
const Movie = require("../models/Movie.model")
const moviesController = require("../controllers/movies.controller")

/* Movies */
router.get('/movies/index', moviesController.list)

/* Add movies */
router.get('/movies/new', moviesController.create)

router.post('/movies/new', moviesController.doCreate)

/* Edit movies */
router.get('/movies/:id/edit', moviesController.edit)

router.post('/movies/:id/edit', moviesController.doEdit)

/* Delete movies */
router.post('/movies/:id/delete', moviesController.delete)

/* Movies details */
router.get('/movies/:id', moviesController.details)

module.exports = router