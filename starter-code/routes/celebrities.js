//REQUIRES
const mongoose = require('mongoose');
const express = require('express');


//CONSTANTS
const router = express.Router();

//MODELS
const Celebrity = require('../models/Celebrity');

//ROUTES

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((celebs) => {
      res.render('celebrities/index', {celebs});
    })
    .catch((err) => {
      console.log('There was an error' , err);
    })
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities/new', (req, res, next) => {
  const celeb = req.body;
  Celebrity.create(celeb)
    .then(() => {
      res.redirect('/celebrities');
    })
})

router.get('/celebrities/:id', (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findOne({_id: celebId})
  .then((celeb) => {
    res.render('celebrities/show', {celeb});
  })
  .catch((err) => {
    console.log(err);
  })
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findByIdAndRemove(celebId)
    .then(() => {
      res.redirect('../');
    })
})
router.get('/celebrities/:id/edit', (req, res, next) => {
  const celeb = req.params;
  Celebrity.findById(celeb.id)
    .then((celeb) => {
      res.render(`celebrities/edit`, {celeb});
    })
})

router.post('/celebrities/:id/edit', (req, res, next) => {
  const celeb = req.params;
  const editedCeleb = req.body;
  Celebrity.findByIdAndUpdate(celeb.id, editedCeleb)
    .then((celeb) => {
      res.redirect(`../celebrities/${celeb}`);
    })
})
module.exports = router;