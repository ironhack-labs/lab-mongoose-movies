const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(allTheCelebritiesFromDB => {
      console.log('Retrieved celebrities from DB:', allTheCelebritiesFromDB);
      res.render('celebrities/index', {celebrities: allTheCelebritiesFromDB });
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
    })
});

router.get('/celebrities/:bookId', (req, res, next) => {
  Celebrity.findById(req.params.bookId)
    .then(theCelebrity => {
      console.log(`El objeto JSON es: ${theCelebrity}`);
      res.render('celebrities/celebrity-details', { celebrity: theCelebrity });
    })
    .catch(error => {
      console.log('Error while retrieving book details: ', error);
    })
});

module.exports = router;
