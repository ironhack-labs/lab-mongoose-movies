const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/movies.controller');

router.get('/', moviesController.list)
router.get('/create', moviesController.create)

router.post('/create', moviesController.doCreate)

router.get('/:id', moviesController.get)
router.get('/:id/edit', moviesController.edit)
router.post('/:id/edit', moviesController.doEdit)
router.post('/:id/delete', moviesController.delete)

module.exports = router;
