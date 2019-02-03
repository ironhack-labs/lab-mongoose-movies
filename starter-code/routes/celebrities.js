const express = require('express');

const router = express.Router();

const Celebrity = require('../models/Celebrity');

router.get('/routes/celebrities', (req,res,next) =>{
   Celebrity.find()
    .then (allCelebrities =>{
      res.render('celebrities/index', {celebritiesFromDB: allCelebrities})

    })
    .catch (err => console.log("error while getting all celebrities from DB", err))
})

module.exports = router;