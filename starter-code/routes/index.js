const express = require('express');
const router  = express.Router();
// const moviesModel = require("./../models/movies");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
