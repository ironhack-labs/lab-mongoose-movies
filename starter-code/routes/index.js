const express = require('express');
const router  = express.Router();
const celebrityController = require('../controllers/celebrity.controller');
const moviesController = require('../controllers/movies.controller')
/* GET home page */

// -- RUTAS CELEBRITIES
router.get('/celebrities', celebrityController.list);
router.get('/celebrities/:id', celebrityController.detail);
router.get('/celebrities/new', celebrityController.register);
router.post('/celebrities/new', celebrityController.doRegister);
router.post('/celebrities/:id/delete', celebrityController.delete);
router.get('/celebrities/:id/edit', celebrityController.edit)
router.post('/celebrities/:id/edit', celebrityController.doEdit)


// -- RUTAS MOVIES
router.get('/movies', moviesController.list);
router.get('/movies/:id', moviesController.detail);
router.get('/movies/new', moviesController.register);
router.post('/movies/new', moviesController.create)
router.post('/movies/:id/delete', moviesController.delete);
router.get('/movies/:id/edit', moviesController.edit);
router.post('/movies/:id/edit', moviesController.update);

router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
