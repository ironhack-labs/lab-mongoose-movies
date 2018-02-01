const express = require('express');
const Celebrity = require('../models/celebrity.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(portfolio => {

    res.render('celebrities/index', {portfolio})
  })
  .catch(err => {
    return next(err);
  })
});

module.exports = router;
