const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js');

router.get('/celebrities', (req, res, next) => {
  console.log(res);
  Celebrity.find()
    .then((result) => {
      res.render('celebrities/index', { celeb: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((result) => {
      res.render('celebrities/show', { show: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
