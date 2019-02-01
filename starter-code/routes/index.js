const express = require('express');

const router = express.Router();

const CelebrityModel = require('../models/Celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  CelebrityModel.find()
    .then((retunedCelebrities) => {
      res.render('celebrities/index', { index: retunedCelebrities });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
