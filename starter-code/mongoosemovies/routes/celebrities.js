var express = require('express');
var Celebrity = require('../models/Celebrity');
var router = express.Router();



router.get('/', function(req, res, next) {
  Celebrity.find({}, (err, c) => {
    if (err) {
      next();
    } else {
    res.render('celebrities/index', {
      title: 'Listado de cantamañanas',
      celebrities: c
    });
  }});
});

router.get('/:id', function(req, res, next) {
  
});




module.exports = router;
