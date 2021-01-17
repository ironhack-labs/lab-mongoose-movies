const express = require('express');
const router = express.Router();
const indexContrtoller = require('../controllers/index.controller')
const celebritiesController = require('../controllers/celebrities.controller')
const moviesController = require('../controllers/movies.controller')

router.get('/celebrities/new', celebritiesController.create);
router.get('/celebrities', celebritiesController.list);
router.post('/celebrities', celebritiesController.doCreate);
router.get('/celebrities/:id', celebritiesController.show);
router.post('/celebrities/:id/delete', celebritiesController.delete);
router.get('/celebrities/:id/edit', celebritiesController.edit);
router.post('/celebrities/:id/edit', celebritiesController.doEdit);


router.get('/movies/new', moviesController.create);
router.get('/movies', moviesController.list);
router.post('/movies', moviesController.doCreate);
router.get('/movies/:id', moviesController.show);
router.post('/movies/:id/delete', moviesController.delete);
router.get('/movies/:id/edit', moviesController.edit);
router.post('/movies/:id/edit', moviesController.doEdit);







router.get('/', indexContrtoller.home);


module.exports = router;
