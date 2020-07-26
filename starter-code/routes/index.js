const express = require('express');
//const Celebrity = require('../models/celebrity.js');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET celebrities page */
/* router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then((allTheCelebritiesFromDB) =>{
      console.log('DB:', allTheCelebritiesFromDB);
     res.render('celebrities/index', {celebrities: allTheCelebritiesFromDB});
  })
  .catch(next);
});
*/


module.exports = router;
