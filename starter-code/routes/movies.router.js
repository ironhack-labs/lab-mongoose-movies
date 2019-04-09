const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies.controller')

router.get('/', moviesController.list)

router.get('/new', moviesController.new)
router.post('/', moviesController.create)

router.get('/:id', moviesController.detail)
router.post('/:id/delete', moviesController.delete)

router.get('/:id/edit', moviesController.edit)
router.post('/:id', moviesController.doEdit)

module.exports = router