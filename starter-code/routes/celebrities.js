const express = require('express');
const mongoose     = require('mongoose');
const router  = express.Router();
const Celebrity = require("../models/Celebrity");

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
  .then(data => {
    console.log(data);
    res.render('celebrities/index', {data})
  })
  .catch(err => {
    next();
    return console.error('Error connecting to mongo', err)
  })
});

module.exports = router;