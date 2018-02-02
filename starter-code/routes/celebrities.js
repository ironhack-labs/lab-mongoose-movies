'use strict';

const express = require('express');

// require the Drone model here

const router = express.Router();

const Celebrity = require('../models/celebrities');

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) {
      return next(err);
    }
    res.render('./celebrities/index', {
      celebrities: celebrities
    });
  });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/:id', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrities) => {
    if (err) { return next(err); }

    res.render('celebrities/show', {celebrities: celebrities});
  });
});

router.post('/', (req, res, next) => {
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  const newCelebrity = new Celebrity(celebrityInfo);

  newCelebrity.save((err) => {
    if (err) {
      return next(err);
    }
    return res.redirect('/celebrities');
  });
});

router.post('/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id;

  Celebrity.findByIdAndRemove(celebrityId, (err, celebrities) => {
    if (err) { return next(err); }

    return res.redirect('/celebrities');
  });
});

module.exports = router;
