const express = require('express');
const Celebrity = require('../models/celebrity');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((todasLasCelebritiesinDB) => {
      // console.log('Retrieved books from DB:', allTheBooksFromDB);
      res.render('celebrities/index', { celebrity: todasLasCelebritiesinDB });
    })
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);
    })
});

module.exports = router;
