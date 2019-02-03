const express = require('express');
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');

const app = require('../app');

const router = express.Router();

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((data) => {
      const celebrities = data;
      res.render('celebrities/index', { celebrities });
    })
    .catch((err) => {
      console.log('an error happened: ', err);
      next();
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId)
    .then((data) => {
      const celebDetails = data;
      res.render('celebrities/show', { celebDetails });
    })
    .catch((err) => {
      console.log('an error happened: ', err);
      next();
    });
});

module.exports = router;
