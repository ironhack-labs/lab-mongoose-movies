const express = require('express');
const router  = express.Router();
const Celebrities = require('../models/celebrity')
const mongoose = require('mongoose');

router.get('/celebrities', (req, res, next) => {
  Celebrities.find()
    .then(celebritiesFound => {
      res.render('celebrities/index', {celebritiesFound})
    })
    .catch((err) => {
      console.log(err)
    })
});

module.exports = router;