const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;

/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(celebrity => {
    res.render('celebrities',  {celebrity})
  })
  .catch(err => console.log(err))
});
