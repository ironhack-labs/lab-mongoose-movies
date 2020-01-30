const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');

//1.
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebritiesFromDB => {
      console.log('celebritiesFromDB: ', celebritiesFromDB);
      res.render('celebrities/index', { celebrities: celebritiesFromDB });
    })
    .catch(err => next(err));
});

//2.
router.get('/celebrities/:theId', (req, res, next) => {
  Celebrity.findById(req.params.theId)
    .then(celebrityFromDB => {
      console.log('celebritiesFromDB: ', celebrityFromDB);
      res.render('celebrities/show', { celebrity: celebrityFromDB });
    })
    .catch(err => next(err));
});

module.exports = router;
