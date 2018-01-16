const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies.controller');

router.get('/', moviesController.index);

router.get('/new', moviesController.new);
router.post('/', moviesController.create);

router.get('/:id', moviesController.show);

// router.get('/:id/edit', moviesController.edit);
// router.post('/:id', moviesController.update);

// router.post('/:id/delete', moviesController.delete);

module.exports = router;