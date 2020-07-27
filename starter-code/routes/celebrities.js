const express = require('express');
const router  = express.Router();
const Celebrity = require('./../models/celebrity');


// router.get('/celebrities', (req, res, next) => {
//   res.render('celebrities');
// });


router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(allTheCelebritiesFromDB => {
      console.log('Retrieved celebrities from DB:', allTheCelebritiesFromDB);
      res.render('celebrities/index', { celebrity1: allTheCelebritiesFromDB });
    })
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);
    })
});


module.exports = router;