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
  console.log(req.params.id);
  Celebrity.findById(req.params.id, (err, c) => {
    console.log(c);
    if (err) {
      next();
      console.log(err);
    }
      res.render('celebrities/show', {
        title: 'Celebrity Profile',
        celebrities: c
      });
  });
});




module.exports = router;
