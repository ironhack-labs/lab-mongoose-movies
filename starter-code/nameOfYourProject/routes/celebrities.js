'use strict';

const express = require('express');
const router = express.Router();

// require the Celebrity model here
const Celebrity = require('../models/celebrity');

// router.get("/", (req, res) => {
//     res.redirect('/celebrities');
//   });

router.get('/celebrities', (req, res, next) => {
  // Iteration #2
  Celebrity.find({}, (err, celebArray) => {
    if (err) {
      throw err;
    } else {
      let celebObject = {celebritiesList: celebArray};
      res.render('celebrities/index', celebObject);
    }
  });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/celebrities/:id', (req, res, next) => {
  let parsedName = req.params.id;
  Celebrity.findOne({name: parsedName}, (err, celebMatch) => {
    if (err) {
      throw err;
    } else {
      let celebCandidate = {nameMatch: celebMatch};
      res.render('celebrities/show', celebCandidate);
    }
  });
});

router.post('/celebrities', (req, res, next) => {
  let inputCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  const newCeleb = new Celebrity(inputCeleb);
  newCeleb.save((err) => {
    if (err) {
      res.render('celebrities/new');
    } else {
      res.redirect('celebrities');
    }
  });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  let parsedId = req.params.id;

  Celebrity.findByIdAndRemove({_id: parsedId}, (err, celebObject) => {
    if (err) {
      return next(err);
    } else {
      res.redirect('/celebrities');
    }
  });
});

module.exports = router;
