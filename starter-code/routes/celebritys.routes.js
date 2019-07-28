const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity-model')


// Listado de personaje
router.get('/list', (req, res, next) => {
  Celebrity.find({})
    .then(allTheCelebrities => res.render('celebrities-list', { celebrities: allTheCelebrities }))  // ojo! pasar obj
    .catch(err => console.log('Hubo un error:', err))
})

// Detalle del personaje
router.get('/detail/:id', (req, res, next) => {
  const celebrityId = req.params.id
  Celebrity.findById(celebrityId)
    .then(theWholecelebrity => res.render('celebrities-detail', { celebrities: theWholecelebrity }))
    .catch(err => console.log('Hubo un error:', err))
})

// Añadir personaje
router.get('/create', (req, res, next) => res.render('celebrities-add'))
router.post('/create', (req, res, next) => {

  const { name, occupation, catchPhrase } = req.body

  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect('/celebrities/list'))
    .catch(err => console.log('Hubo un error:', err))
})

// Edición datos de personaje
router.get('/edit', (req, res, next) => {
  //console.log(req.query)
  Celebrity.findById(req.query.celebrityId)
    .then(theCelebrity => res.render('celebrities-edit', { theCelebrity }))
    .catch(err => console.log('Hubo un error:', err))
})
router.post('/edit', (req, res, next) => {

  const { name, occupation, catchPhrase } = req.body

  // Todos los métodos de actualizar pueden recibir {new: true} como último argumento opcional, retornando el nuevo elemento y no el previo al update
  Celebrity.findByIdAndUpdate(req.query.celebrityId, { $set: { name, occupation, catchPhrase } }, { new: true })
    .then(theNewCelebrity => {
      console.log(theNewCelebrity)
      res.redirect('/celebrities/list')
    })
    .catch(err => console.log('Hubo un error:', err))
})

// Eliminar personaje
router.get('/delete', (req, res, next) => {
  //console.log(req.query)
  Celebrity.findById(req.query.celebrityId)
    .then(theCelebrity => res.render('celebrities-delete', { theCelebrity }))
    .catch(err => console.log('Hubo un error:', err))
})
router.post('/delete', (req, res, next) => {

  const { name, occupation, catchPhrase } = req.body

  Celebrity.findByIdAndRemove(req.query.celebrityId, { $set: { name, occupation, catchPhrase } })
    .then(theNewCelebrity => {
      console.log(theNewCelebrity)
      res.redirect('/celebrities/list')
    })
    .catch(err => console.log('Hubo un error:', err))
})
module.exports = router
