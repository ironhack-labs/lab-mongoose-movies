const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/movies.controller');

router.get('/new', moviesController.new);
router.post('/new', moviesController.newMovie);

router.get('/', moviesController.list);
router.get('/:id', moviesController.get);

router.post('/:id/delete', moviesController.delete);

router.get('/:id/edit', moviesController.edit);
router.post('/:id/edit', moviesController.editMovie);

module.exports = router;