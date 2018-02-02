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

    res.render('celebrities/show', {
      title: 'Celebrity Inventory',
      celebrities: celebritiesArray
    });
  });
});

router.get('/new', function (req, res, next) {
  res.render('celebrities/new', {
    title: 'Celebrity Inventory'
  });
});

router.post('/new', function (req, res, next) {
  const theCelebrity = new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  });

  // you use ... with an instance of a model
  theCelebrity.save((err) => {
    if (err) {
      return next(err);
    } else {
      res.redirect('/celebrities)');
    }
  });
});

router.post('/:id/delete', function (req, res, next) {
  Celebrity.findByIdAndRemove({celebs: '_id'}, (err) => {
    if (err) {
      return next(err);
    } else {
      res.redirect('/celebrities)');
    }
  });
});

module.exports = router;
