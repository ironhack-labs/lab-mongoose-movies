const express = require('express');
const router  = express.Router();

const movies = require('../models/movie.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
