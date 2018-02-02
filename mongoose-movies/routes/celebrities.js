const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');

router.get('/', function (req, res, next) {
  Celebrity.find({}, (err, celebritiesArray) => {
    if (err) { return next(err); }

    // celebrities can be named whatever
    // celebrities Array has to be the same bc it is passed as an argument
    res.render('celebrities/index', {
      title: 'Celebrity Inventory',
      celebrities: celebritiesArray
    });
  });
});

router.get('/:id', function (req, res, next) {
  Celebrity.findOne({celebs: '_id'}, (err, celebritiesArray) => {
    if (err) { return next(err); }

    // celebrities can be named whatever
    // celebrities Array has to be the same bc it is passed as an argument
    res.render('celebrities/show', {
      title: 'Celebrity Inventory',
      celebrities: celebritiesArray
    });
  });
});

module.exports = router;
