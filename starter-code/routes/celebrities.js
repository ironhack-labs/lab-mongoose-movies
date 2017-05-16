/*jshint esversion:6*/
const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');

// Iteration 2
router.get('/', function(req, res, next) {
  Celebrity.find({}, function(err, celebrities) {
    if (err) return next(err);
    res.render('celebrities/index', {
      title: "All Celebrities",
      celebrities
    });
  });
});

// Iteration 3
router.get('/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) {
      return next(err);
    }
    res.render('celebrities/show', {
      celebrity
    });
  });
});


module.exports = router;
