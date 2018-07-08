'use strict';

const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity'); // .js missing??

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then((celebrity) => {
      res.render('celebrities/index', {celebrity: celebrity});
    })
    .catch(error => {
      next();
      console.log(error);
      return error;
    });
});

module.exports = router; // Why do we need this?
