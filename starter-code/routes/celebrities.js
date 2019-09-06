const express = require('express');
const router  = express.Router();

const celebrity = require('./../models/celebrity');


router.get('/celebreties', (req, res, next) => {
    console.log('celebreties');
    Celebrity.find()
      .then(celebreties => {
        console.log('Loaded all of the celebrities');
        console.log(celebreties);
        
      })
      .catch(error => {
        next(error);
      });
});

module.exports = router;