const express = require('express');
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');

const app = require('../app');

const router = express.Router();

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((data) => {
      const celebrities = data;
      res.render('celebrities/index', { celebrities });
    })
    .catch((err) => {
      console.log('an error happened: ', err);
      next();
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId)
    .then((data) => {
      const celebDetails = data;
      res.render('celebrities/show', { celebDetails });
    })
    .catch((err) => {
      console.log('an error happened: ', err);
      next();
    });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities', (req, res, next) => {
  const newCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };
  const newCelebrity = new Celebrity(newCeleb);
  newCelebrity.save()
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      console.log('an error happened: ', err);
      res.render('celebrities/new');
    });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      console.log('An error happened: ', err);
      next();
    });
});

module.exports = router;
