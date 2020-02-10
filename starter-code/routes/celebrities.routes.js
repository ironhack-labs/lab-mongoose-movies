const express = require('express')
const router = express.Router()
const Celebrity = require('../models/celebrity.model')

// Mostrar listado completo de celebridades
router.get('/', (req, res) => {
  Celebrity.find()
    .then(allCelebrities => res.render('celebrities/celebrities-list', { celebrities: allCelebrities }))
    .catch(err => console.log("Error consultando las celebrities en la BBDD: ", err))
})

// Mostras detalles de celebridad
router.get('/celebritie-details/:id', (req, res) => {
  const celebId = req.params.id
  Celebrity.findById(celebId)
    .then(theCelebrity => res.render('celebrities/celebritie-details', theCelebrity))
    .catch(err => console.log("Error consultadno la BBDD: ", err))
})

// Inclusión de una nueva celebridad en la BBDD
router.get('/new', (req, res) => res.render('celebrities/new'))
router.post('/new', (req, res) => {
  const { name, occupation, catchPhrase } = req.body
  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect('/celebrities'))
    .catch(err => {
      res.redirect('/new')
      console.log("Error incluyendo la entrada en la BBDD: ", err)
    })
})

// Borrar una celebridad de la BBDD
// router.post('/delete/:celebrityId', (req, res, next) => {
//   const celebrityId = req.params.celebrityId
//   Celebrity.findByIdAndRemove(celebrityId, req.body)
//     .then(() => {
//       res.redirect('/celebrities');
//       next();
//     })
//     .catch(error => {
//       console.log(`Error deleting celebritie by ID: ${error.message}`);
//       next();
//     });
// })

router.get('/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findByIdAndRemove(celebrityId)
    .then(x => res.redirect('/celebrities'))
    .catch(err => console.log(err))
});

// Editar celebridad
router.get('/edit', (req, res) => {
  const celebrityId = req.query.id
  Celebrity.findById(celebrityId)
    .then(theCelebrity => res.render('celebrities/edit', theCelebrity))
    .catch(err => console.log(err))
})
router.post('/edit/:celebrityId', (req, res) => {
  const celebrityId = req.params.celebrityId

  // Retorna el objeto actualizado:
  Celebrity.findByIdAndUpdate(celebrityId, req.body)
    .then(x => res.redirect(`/celebrities/celebritie-details/${celebrityId}`))
    .catch(err => console.log(err))
})

module.exports = router