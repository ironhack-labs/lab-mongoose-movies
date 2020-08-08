const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
})
router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
      .populate('movies')
      .then(actor => {
        console.log(actor)
        res.render('celebrities/show', actor);
      })
      .catch(error => next(error))
  })