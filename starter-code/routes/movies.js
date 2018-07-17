const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies.controller');

router.get('/', moviesController.list);

router.get('/create', moviesController.create);
router.post('/create', moviesController.doCreate);

router.get('/:id', moviesController.detail);
router.post('/:id/delete', moviesController.delete);

router.get('/:id/update', moviesController.update);
router.post('/:id/update', moviesController.doUpdate)

module.exports = router;
