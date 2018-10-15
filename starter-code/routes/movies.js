'use strict';
const express = require('express');
const router = express.Router();

/* Home Page */

router.get('/', function(req, res, next) {
  res.render('movies', { title: 'Express' });
});

module.exports = router;
