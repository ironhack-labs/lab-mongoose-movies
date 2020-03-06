const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity'); 

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then((celebrities) => {
    res.render('celebrities/index', {
      celebrities
    });
  })
  .catch((error) => {
    console.log('An error happened while finding celebrities: ', error);
    next(error);
  })
});

module.exports = router;
