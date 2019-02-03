const express = require('express');
const router  = express.Router();
const Celeb = require('../models/Celeb')
const bodyParser = require('body-parser')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;