const express = require('express');
const Celebrity = require('../models/Celebrity.model');
const router  = express.Router();

/* Home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/*Celebrities list*/
router.get('/celebrities', (req, res, next) => {
   Celebrity.find({})
    .then(celebs => res.render('celebrities/index', {celebs}))
    .catch(e => console.error(e))
  })

module.exports = router;
