const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

/* GET home page */
router.get('/celebrities', (req, res, next) => {
  Celebrity
          .find()
          .then(allCelebrities => res.render('celebrities/celebrities',{allCelebrities}))
          .catch(err => console.log('Error while searching celebrities'))
});


router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new-celebrity');
});


router.post('/celebrities/create', (req, res, next) => {
  Celebrity
          .create(req.body)
          .then(newCelebrity => console.log('Success'))
          .catch(err => {
            console.log('Error while creating new celebrity',err)
            res.render('celebrities/new-celebrity')});
          
});

module.exports = router;