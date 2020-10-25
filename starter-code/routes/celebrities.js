const express = require('express');

const router  = express.Router();
const Celebrity = require('../models/celebrity');


router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((todasLasCelebritiesinDB) => {
      console.log('Retrieved books from DB:', todasLasCelebritiesinDB);
      res.render('celebrities/index', { celebrity: todasLasCelebritiesinDB });
    })
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);
    })
});

module.exports = router;