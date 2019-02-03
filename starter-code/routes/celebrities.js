const express = require('express');
const router  = express.Router()
const Celebrity = require('../models/celebrity')

router.get('/celebrities', (req, res, next) =>{
  Celebrity.find()
  .then( data => {
    // res.json(data)
    res.render('celebrities/index', {data})

  })
  .catch( () => {
    res.send('An error has ocurred')
  })
})

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findOne()
  .then( data =>{
    console.log({data})
    res.render('celebrities/show', {data})
  })
  .catch( () => {
    res.send('An error has ocurred')
  })
})

module.exports = router;