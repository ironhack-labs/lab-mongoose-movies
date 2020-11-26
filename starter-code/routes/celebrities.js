//REQUIRES
const mongoose = require('mongoose');
const express = require('express');


//CONSTANTS
const router = express.Router();

//MODELS
const Celebrity = require('../models/Celebrity');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((celebs) => {
      console.log(celebs);
      res.render('celebrities/index', {celebs});
    })
    .catch((err) => {
      console.log('There was an error' , err);
    })
})

router.get('/celebrities/:id', (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findOne({_id: celebId})
    .then((celeb) => {
      console.log(celeb)
      res.render('celebrities/show', {celeb});
    })
    .catch((err) => {
      console.log(err);
    })
})

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities/new', (req, res, next) => {

});

module.exports = router;