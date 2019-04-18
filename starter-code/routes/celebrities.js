const express = require('express');
const router = express.Router();


const Celebrity = require('../models/celebrity');
// const celebs = require('../data/celebs.json');


router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      // console.log(celebrities);
      res.render('celebrities/index', {celebrities})
    })
    .catch(err => next(err))
});

module.exports = router