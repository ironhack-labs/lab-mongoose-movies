const express = require('express');

const Product = require('../models/celebrity.js');

const router = express.Router();


router.get('/celebritys', (req, res, next) => {
  Celebrity.find((err, celebritys) => {
    if (err) {
      next(err);
      return;
    }

      // display views/celebrities/index.ejs
    res.render('celebrities/index', {
      celebritys: celebritys
    });
  });
});

router.get('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id;
Celebrity.findById(celebrityId, (err, celebDoc) => {
  if (err) {
    next(err);
    return;
  }
});
});
