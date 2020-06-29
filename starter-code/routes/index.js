const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', require('../views/celebrities/celebList.hbs'))
router.get('/movie-list', require('../views/movies-views/movie-list.hbs'))

module.exports = router;
