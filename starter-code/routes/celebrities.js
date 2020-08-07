const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebritiesFromDB => {
      console.log(celebritiesFromDB);
      res.render('celebrities/index', {celebrities: celebritiesFromDB});
    }).catch(err => console.log(`Error finding all celebrities: ${err}`))
  
});

module.exports = router;