const express = require('express');
const router  = express.Router();
const routeCelebrities = require('./celebrities')
const routeMovies = require('./movies')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', routeCelebrities);
router.post('/celebrities', routeCelebrities);
router.get('/celebrities/:id', routeCelebrities);

router.post('/celebrities/:id/delete', routeCelebrities)

router.get('/celebrities/:id/edit', routeCelebrities)
router.post('/celebrities/:id', routeCelebrities)

// Movies
router.get('/movies', routeMovies);
router.get('/movies/:id', routeMovies);

module.exports = router;
