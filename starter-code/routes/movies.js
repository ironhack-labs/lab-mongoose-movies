const express = require('express');

const router = express.Router();

const Movie = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res) => {
  console.log('entrou no index.js');
  res.render('index');
});

module.exports = router;
