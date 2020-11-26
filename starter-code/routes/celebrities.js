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
