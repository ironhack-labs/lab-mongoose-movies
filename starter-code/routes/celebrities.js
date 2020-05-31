const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js');

router.get('/', (req, res, next) => {
    Celebrity.find()
        .then(allCelebrities => {
            console.log(`/celebrities => ${allCelebrities.length} displayed`)
            res.render('celebrities/index', {celebrities: allCelebrities})
        })
        .catch(err => console.log('Error displaying the celebrities', err))
  });
  
  module.exports = router;