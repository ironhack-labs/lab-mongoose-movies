const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebritiesFromDB => {
      console.log('celebritiesFromDB: ', celebritiesFromDB);
      res.render('celebrities/index', { celebrities: celebritiesFromDB });
    })
    .catch(err => next(err));
});

module.exports = router;
