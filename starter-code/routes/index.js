const express = require('express');
const router  = express.Router();
const celebrity = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  celebrity.find()
    .then(celebritiesFromDB => {
      console.log(celebritiesFromDB);

      res.render('celebrities', { celebrities: celebritiesFromDB })
    })
    .catch(err => console.log(err))
});

router.get('/celebrities/:celebrityId', (req, res, next) => {
  celebrity.findById(req.params.celebrityId)
    .then(theCelebrity => {
      console.log(theCelebrity)
      res.render('celebrity-details', { celebrity: theCelebrity });
    })
});

module.exports = router;
