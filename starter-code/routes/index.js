const express = require('express');
const router  = express.Router();
const CelebrityModel = require('./../models/Celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index.hbs');
});

module.exports = router;
