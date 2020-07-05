const express = require('express');
const router  = express.Router();


const Celebrity = require('../models/Celebrity.model.js')

/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then((celebritiesFromDb)=> res.render('celebrities/index', {celebritiesFromDb}))
  .catch((e)=> console.log(e))
  
})

/* POST celebrities page */
router.post('/celebrities', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body
  Celebrity.create({name, occupation, catchPhrase})
  .then(()=> console.log('New created'))
  .then(() => res.redirect('/celebrities'))
  
  .catch((e)=> console.log(e))
  
})

/* GET New celebrities page */
router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
 
})

/* GET celebrities page */
router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then((celebrityFromDb)=> res.render('celebrities/show', {celebrityFromDb}))
  .catch((e)=> console.log(e))
})



module.exports = router;
