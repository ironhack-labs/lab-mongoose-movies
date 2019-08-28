const express = require('express');

const router = express.Router();

// const Celebrity = require('../models/Celebrity');

// const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
