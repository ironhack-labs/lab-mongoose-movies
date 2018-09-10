const express = require('express');
const router  = express.Router();
const Celebrity    = require('../models/celebrity')


router.get('/celebrity', (req, res, next) => {
  Celebrity.find()
  .then((celebInfo)=>{
    res.render('celebrities/listOfCelebs', {listOfCelebs: celebInfo})
  })
  .catch((err)=>{
    next(err);
  })
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/newCeleb')
})

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then((celebInfo)=>{
    res.render('celebrities/celebDetails', {celebDetails: celebInfo})
  })
  .catch((err)=>{
    next(err);
  })
});




module.exports = router;