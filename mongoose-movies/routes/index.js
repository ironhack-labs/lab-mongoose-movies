
var express = require('express');
var router = express.Router();

// const index = require('../models/index')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

module.exports = router;
