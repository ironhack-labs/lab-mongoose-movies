const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js');

router.get('/celebrities', (req, res) => {
  Celebrity.find() 
    .then(allCelebs => {
      console.log(allCelebs)
      res.render('celebrities/index', {celebs: allCelebs});  
    });
});

module.exports = router;