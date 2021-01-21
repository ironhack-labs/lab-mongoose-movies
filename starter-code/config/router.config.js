const express = require('express');
const router  = express.Router();

const commonController = require('../controllers/common.controller');
const celebritiesController = require('../controllers/celebrities.controller');
const moviesController = require('../controllers/movies.controller');

/* GET home page */
router.get('/', commonController.home);

router.get('/celebrities', celebritiesController.list);
router.get('/celebrity/:id', celebritiesController.details);
router.get('/celebrities/new', celebritiesController.create);
router.post('/celebrities/new', celebritiesController.doCreate);
router.post('/celebrity/:id/delete', celebritiesController.delete);
router.get('/celebrity/:id/edit', celebritiesController.edit);
router.post('/celebrity/:id', celebritiesController.doEdit);

router.get('/movies', moviesController.list);
router.get('/movie/:id', moviesController.detail);



module.exports = router;
