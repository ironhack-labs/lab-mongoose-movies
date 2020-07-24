const express = require('express');
const router = express.Router();

const Celebrities = require('../models/Celebrity.model')
const celebritiesController = require('../controllers/celebrities.controller')
const moviesController = require('../controllers/movies.controller')

router.get('/', celebritiesController.home)

router.get('/celebrities', celebritiesController.showCelebrities)
router.get('/celebrities/show/:id', celebritiesController.showDetails)

router.get('/celebrities/new', celebritiesController.createCeb)
router.post('/celebrities/new', celebritiesController.doCreateCeb)

router.get('/celebrities/edit/:id', celebritiesController.editCeb)
router.post('/celebrities/edit/:id', celebritiesController.doEditCeb)

router.post('/celebrities/delete/:id', celebritiesController.deleteCeb)

router.get('/movies', moviesController.showMovies)
router.get('/movies/show/:id', moviesController.showDetails)

router.get('/movies/new', moviesController.createMov)
router.post('/movies/new', moviesController.doCreateMov)

router.get('/movies/edit/:id', moviesController.editMov)
router.post('/movies/edit/:id', moviesController.doEditMov)

router.post('/movies/delete/:id', moviesController.deleteMovie)

module.exports = router;
