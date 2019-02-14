const express = require('express');
const router  = express.Router();
const Celeberty = require('../models/celeberty');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
