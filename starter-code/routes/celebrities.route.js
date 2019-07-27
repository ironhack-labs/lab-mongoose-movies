const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity.model')

router.get('/ceb-index',(req, res, next) => {
//  console.log('estoy en la ruta que buscas')
  Celebrity.find()
  .then(allCeleFromDB => {
//    console.log(allCeleFromDB)
    res.render('celebrities/ceb-index', {allCeleFromDB})
  })
  .catch(err => {
    console.log('Error while getting the celebrities from the DB', err)
    next()
  })
  
})

module.exports = router;