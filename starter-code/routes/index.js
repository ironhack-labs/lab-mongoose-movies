var express = require('express');
var router = express.Router();
const Celebrity = require('../models/Celebrity');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Celebrities Web' });
});

module.exports = router;
