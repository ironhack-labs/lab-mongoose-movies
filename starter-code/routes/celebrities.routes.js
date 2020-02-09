const express = require('express')
const router = express.Router()
const Celebritie = require('../models/celebrity.model')

// Mostrar listado completo de celebridades
router.get('/', (req, res) => {
  Celebritie.find()
    .then(allCelebrities => res.render('celebrities/celebrities-list', { celebrities: allCelebrities }))
    .catch(err => console.log("Error consultando las celebrities en la BBDD: ", err))
})

// Mostras detalles de celebridad
router.get('/celebritie-details/:id', (req, res) => {
  const celebId = req.params.id
  Celebritie.findById(celebId)
    .then(theCelebritie => res.render('celebrities/celebritie-details', theCelebritie))
    .catch(err => console.log("Error consultadno la BBDD: ", err))
})

// Inclusión de una nueva celebridad en la BBDD
router.get('/new', (req, res) => res.render('celebrities/new'))
router.post('/new', (req, res) => {
  const { name, occupation, catchPhrase } = req.body
  Celebritie.create({ name, occupation, catchPhrase })
    .then(() => res.redirect('/celebrities'))
    .catch(err => {
      res.redirect('/new')
      console.log("Error incluyendo la entrada en la BBDD: ", err)
    })
})

// Borrar una celebridad de la BBDD
router.post('/delete/:id', (req, res, next) => {
  const celebId = req.params.id
  Celebritie.findByIdAndRemove(celebId)
    .then(() => {
      res.locals.redirect = '/celebrities';
      next();
    })
    .catch(error => {
      console.log(`Error deleting celebritie by ID: ${error.message}`);
      next();
    });

})
// router.post('/delete/:id', (req, res, next) => {
//   const celebId = req.params.id
//   Celebritie.findByIdAndRemove(celebId)
//     .then(() => {
//       console.log('heya')
//       res.redirect('/celebrities')
//     })
//     .catch(err => console.log("Error borrando la entrada en la BBDD: ", err))
// })

module.exports = router