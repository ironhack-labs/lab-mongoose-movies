var express = require('express');
var router = express.Router();

// const mongoose = require('mongoose');
// const celebritySchema = require('../models/Celebrity');
// const Celebrity = mongoose.model('Celebrity', celebritySchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;