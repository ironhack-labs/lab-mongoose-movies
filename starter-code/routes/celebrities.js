const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.js');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(() => {
      res.render('celebrities/index');
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(() => {
      res.render('celebrities/index');
    })
    .catch((err) => {
      console.log(err);
    });
});