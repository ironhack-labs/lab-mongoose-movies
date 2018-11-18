/* eslint-disable import/order */
const mongoose = require('mongoose');
const Celebrity = require('../public/Models/Celebrity');

const dbName = 'Celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);
const express = require('express');

const router  = express.Router();

/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrity => res.render('celebrities/index', { celebrity }))
    .catch(err => next(err));
});

module.exports = router;
