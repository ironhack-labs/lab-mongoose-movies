const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({}).then( celebrities => {
    res.render('celebrities/index', {celebrities});
  })
});