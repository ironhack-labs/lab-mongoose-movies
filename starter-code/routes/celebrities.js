const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity'); 

router.get('/', (req, res, next) => {
  Celebrity.find()
  .then((celebrities) => {
    res.render('celebrities/index', {
      celebrities
    });
  })
  .catch((error) => {
    console.log('An error happened while finding celebrities: ', error);
    next(error);
  })
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
  .then((celebrity) => {
    res.render('celebrities/show', {
      celebrity
    });
  })
  .catch((error) => {
    console.log('An error happened while finding a celebrity: ', error);
    next(error);
  })
});

router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const celebrity = new Celebrity({ name, occupation, catchPhrase });
  celebrity.save()
    .then(() => {
      res.redirect('celebrities/');
    })
    .catch((error) => {
      console.log('Error saving celebrity', error);
      res.render('celebrities/new');
    })
});

module.exports = router;
