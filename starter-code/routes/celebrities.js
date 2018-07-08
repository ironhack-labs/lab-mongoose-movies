'use strict';

const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity'); // .js missing??

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then((celebrity) => {
      res.render('celebrities/index', {celebrity: celebrity});
    })
    .catch(error => {
      next();
      console.log(error);
      return error;
    });
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/new', (req, res, next) => { // Remember /new !!!
  const data = {
    name: req.body.name, // When do we use req.query??
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  const newCelebrity = new Celebrity(data); // Why don't we use Celebrity.create(data)
  newCelebrity.save()
    .then((celebrity) => {
      res.redirect('/celebrities'); // Remember /celebrities
    })
    .catch(error => {
      res.render('celebrities/new');
      console.log(error);
    });
});

router.get('/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId)
    .then(celebrity => {
      res.render('celebrities/show', {celebrity: celebrity});
    })
    .catch(error => {
      next();
      console.log(error);
      return error;
    });
});

router.post('/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id; // Don't really understand why params.id
  Celebrity.findByIdAndRemove(celebrityId)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(error => {
      next();
      console.log(error);
      return error;
    });
});

module.exports = router; // Why do we need this?
