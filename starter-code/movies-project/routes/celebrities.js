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

router.get('/show/:id', (req, res, next) => {
  const celebId = req.params.id;

  Celebrity.findById(celebId, (err, famous) => {
    if (err) { return next(err); }
    res.render('celebrities/show', { famous: famous });
  });
});

module.exports = router;
