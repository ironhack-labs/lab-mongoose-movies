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

// para borrarlos

router.post('/delete/:id', (req, res, next) => {
  const celebrityId = req.params.id
  Celebrity.findByIdAndRemove(celebrityId)
  .then(() => res.redirect('/celebrities/ceb-index'))
  .catch(err => {
    console.log('Error while deleting the celebrities from the DB', err)
    next()
  })  
})

// para editarlos

router.get('/edit', (req, res, next) => {
  // console.log(req.query)
  Celebrity.findById(req.query.celebrityId)
  .then(eachCel =>res.render('celebrities/edit', {eachCel}))
  .catch(err => {
    console.log('Error while passing to edit view', err)
    next()
  })
})
router.post('/edit', (req, res, next) => {
   const cellQuery = req.query.celebrityId
  const {name, ocuppation, catchPhrase} = req.body
  // console.log(req.body)

  Celebrity.findByIdAndUpdate(cellQuery, { $set : {name, ocuppation, catchPhrase} }, {new: true})
  .then(newCell => {
    // console.log(newCell)
    res.redirect('/celebrities/ceb-index')
  })
  .catch(err => {console.log('Error while updating celebrity:', err)
  next()
  })
})


module.exports = router;