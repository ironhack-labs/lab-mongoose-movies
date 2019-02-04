const express = require('express');

const router = express.Router();

const Celebrity = require('../models/Celebrity');

router.get('/celebrities', (req,res,next) =>{
   Celebrity.find()
    .then (allCelebrities =>{
      res.render('celebrities/index', {celebritiesFromDB: allCelebrities})

    })
    .catch (err => console.log("error while getting all celebrities from DB", err))
})

router.get('/celebrities/:celebrityId', (req,res,next) =>{
  const celebrityId = req.params.celebrityId

  Celebrity.findById(celebrityId).populate('celebrity')
   .then (theCelebrity =>{
     res.render('celebrities/show', {celebrity: theCelebrity})

   })
   .catch (err => console.log("error while getting all celebrities from DB", err))
})

module.exports = router;