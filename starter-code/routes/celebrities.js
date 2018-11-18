const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity')

router.get('/', (req, res, next) => {
  Celebrity.find({})
  .then(celebrities => {
    res.render('celebrities/index',  {celebrities})
  })
  .catch(err => console.log(err))
});


