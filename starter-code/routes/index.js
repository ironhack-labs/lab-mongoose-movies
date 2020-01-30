const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(allTheCelebritiesFromDB => {
      res.render('celebrities', { celebrities : allTheCelebritiesFromDB });
    })
    .catch(error => {
      console.log('Error while getting the celebrities from de DB: ', error)
    })

});

module.exports = router;
