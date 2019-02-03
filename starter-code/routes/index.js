const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(allCelebritiesFromDB => {
      res.render('celebrities/index', {celebrities: allCelebritiesFromDB})
    })
    .catch(error => {
      console.log('Error', error)
    })
});

router.get('/celebrities/:celebrityId', (req, res, next) =>{
  console.log(req.params.celebrityId)
  Celebrity.findById(req.params.celebrityId)
    .then(theCelebrity =>{
      res.render('celebrities/show', {show: theCelebrity})
    })
    .catch(error =>{
      console.log('Error with show celebrity', error)
    })
})




module.exports = router;
