const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(allCelebritiesFromDB => {
      res.render('celebrities/index', {celebrities: allCelebritiesFromDB})
    })
    .catch(error => {
      console.log('Error', error)
    })
});




module.exports = router;
