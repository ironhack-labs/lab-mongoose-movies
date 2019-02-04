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
  Celebrity.findById(req.params.id)
  .then( data =>{
    console.log(data)
    // res.json(data)
    res.render('celebrities/show', {data})
  })
  .catch( () => {
    next()
    res.send('An error has ocurred')
  })
})

router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
})

router.post('/celebrities', (req, res, next) => {
  Celebrity.create ( {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  })
  .then (data => {
    res.redirect('/celebrities')
  })
  .catch (error => {
    console.log('An error ocurred')
  })

})

module.exports = router;