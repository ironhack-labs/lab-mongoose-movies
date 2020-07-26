const express = require('express');
const Celebrity = require('../models/Celebrity');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


module.exports = router;