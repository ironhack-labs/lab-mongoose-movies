/* jshint esversion: 9*/
const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(allCelebritiesFromDB => {
      res.render('celebrities', { allCelebrities: allCelebritiesFromDB });
    })
    .catch(error => {
      next(error);
    });
});

router.get('/celebrities/new-celebrity', (req, res) => {
  res.render('celebrities/new-celebrity', {title: "Add A New Celebrity"});
});

router.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  const newCelebrity = new Celebrity({name, occupation, catchPhrase});

  newCelebrity.save()
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.find(req.params)
    .then(celebrity => {
      res.render('celebrities/show', {celebrity});
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;