const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies.controller');

router.get('/', moviesController.indexMovies);
router.get('/new', moviesController.new);
router.get('/:id', moviesController.movieDetails);
router.get('/:id/edit', moviesController.edit);

router.post('/', moviesController.doNew);
router.post('/:id', moviesController.doEdit);
router.post('/:id/delete', moviesController.delete);

module.exports = router;