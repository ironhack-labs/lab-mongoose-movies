const express = require('express');
const Celebrity = require('../models/celebrity.js');
const router = express.Router();


router.get('/celebrities', (req, res, next) => {
    Celebrity.find({}, (err, celebridades) => {
      if (err) {
        console.log(err);
      } else {
        res.render('celebrities/index', {celebridades: celebridades});
      }
  });
});

router.get('/celebrities/:id', (req, res, next) => {

    Celebrity.findById(req.params.id, (err, celebridades) => {
      if (err) {
        console.log(err);
      } else {
        res.render('celebrities/show', {celebridades: celebridades});
      }
  });
});

module.exports = router;
