const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/index', (req, res, next) => {
  Celebrity.find().exec((err, celebrity) => {
    res.render('celebrities/index', { celebrity });
  });
});