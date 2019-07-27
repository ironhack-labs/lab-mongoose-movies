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

// para ir a los detalles


router.get('/show/:id', (req, res, next) => {
//  console.log('estoy en la ruta de los detalles de las celebrities')
  const celebrityId = req.params.id
  Celebrity.findById(celebrityId)
  .then(eachCel =>res.render('celebrities/show', {eachCel}))
    
  .catch(err => {
    console.log('error while getting the id', err)
    next()
  })  
})

// para añadir nuevos

router.get('/create', (req , res, next) => res.render('celebrities/new'))
router.post('/create', (req, res, next) =>{
  const {name, ocuppation, catchPhrase} = req.body


  Celebrity.create({name, ocuppation, catchPhrase})
    .then(() => res.redirect('/celebrities/ceb-index'))
    .catch(err => res.render('celebrities/new'))
})



module.exports = router;