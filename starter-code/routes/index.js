const express = require('express');
const router  = express.Router();
const Celebritie = require('../models/Celebritie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

const celebrities = require('./celebrities');
const movies = require('./movies');

router.use(celebrities);
router.use(movies);
module.exports = router;
