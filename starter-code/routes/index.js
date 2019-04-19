const express = require('express');
const router  = express.Router();
const celebController = require('../controllers/celeb.controller');
const movieController = require('../controllers/movie.controller')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', celebController.list)
router.get('/celebrities/new', celebController.add)
router.get('/celebrities/:id/edit', celebController.edit)
router.get('/celebrities/:id', celebController.details)

router.post('/celebrities', celebController.doAdd)
router.post('/celebrities/:id/delete', celebController.delete)
router.post('/celebrities/:id', celebController.doEdit)

router.get('/movies', movieController.list)
router.get('/movies/new', movieController.add)
router.get('/movies/:id/edit', movieController.edit)
router.get('/movies/:id', movieController.details)

router.post('/movies', movieController.doAdd)
router.post('/movies/:id/delete', movieController.delete)
router.post('/movies/:id', movieController.doEdit)

module.exports = router;