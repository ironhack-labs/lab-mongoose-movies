const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


 /* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => res.render('celebrities', { celebrities }))
    .catch(err => next(err));
});
 module.exports = router;
