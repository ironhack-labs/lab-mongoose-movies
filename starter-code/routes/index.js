const express = require('express');
const Celebrity = require('../models/Celebrity');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
  .then(celebritiesFromDB => res.render('celebrities/index', { celebritiesFromDB }))
  .catch(error => console.log('Error found', error))
});

module.exports = router;
