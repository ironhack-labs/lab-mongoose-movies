const express = require('express');
const router = new express.Router();
const Celebrity = require('../models/celebrity');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
    .then((dbRes) => {
      res.render('celebrities/index.hbs', {
        celebrities: dbRes,
      });
    })
    .catch((next) => {
      console.log(next);
    });
});

router.get('/celebrities/:id', (req, res) => {
  Celebrity.findById(req.params.id)
    .then((dbRes) => {
      res.render('celebrities/show.hbs', {
        celebrity: dbRes,
      });
    })
    .catch((next) => console.log(next));
});

module.exports = router;
