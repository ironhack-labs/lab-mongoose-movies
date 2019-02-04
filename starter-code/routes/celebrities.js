const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render('celebrities/index', { celebrities });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity.save()
    .then((newCelebrity) => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      console.log('celebrities/new', err);
    });
});

router.get('/:id', (req, res, next) => {
  Celebrity.findOne({ _id: req.params.id })
    .then((celebrity) => {
      res.render('celebrities/show', { celebrity });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/delete/:id', (req, res, next) => {
  Celebrity.deleteOne({ _id: req.params.id })
    .then(() => {
      res.redirect('/celebrities');
    });
});


module.exports = router;
