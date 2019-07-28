const express = require('express')
const router = express.Router()

const Celebrity = require('../models/Celebrity.model')


// Listado de celebrities
router.get('/list', (req, res, next) => {
  Celebrity.find({})
    .then(allTheCelebrities => {
      res.render('celebrities-list', { celebrities: allTheCelebrities })
      console.log(allTheCelebrities)
    })  // ojo! pasar obj
    .catch(err => console.log('Hubo un error:', err))
})

router.get('/details/:id', (req, res, next) => {
  const celebrityId = req.params.id
  Celebrity.findById(celebrityId)
    .then(celebrityInfo => res.render('celebrity-detail', { detail: celebrityInfo }))
    .catch(err => console.log('Hubo un error:', err))
})

router.get('/create', (req, res, next) => res.render('celebrities-add'))
router.post('/create', (req, res, next) => {

  const { name, occupation, catchPhrase } = req.body

  Celebrity.create({ name, occupation, catchPhrase  })
    .then(() => res.redirect('/celebrities/list'))
    .catch(err => console.log('Hubo un error:', err))
})

router.get('/remove/:id',(req,res,next) => {
const celebrityId = req.params.id
Celebrity.findByIdAndRemove(celebrityId)
  .then(celebrityInfo => res.redirect('/celebrities/list'))
  .catch(err => console.log('Hubo un error:', err))
})

router.get('/edit', (req, res, next) => {
  //console.log(req.query)
  Celebrity.findById(req.query.celebId)
    .then(theCelebrity => res.render('celebrities-edit', { theCelebrity }))
    .catch(err => console.log('Hubo un error:', err))
})
router.post('/edit', (req, res, next) => {

  const { name, occupation, catchPhrase } = req.body

  // Todos los métodos de actualizar pueden recibir {new: true} como último argumento opcional, retornando el nuevo elemento y no el previo al update
  Celebrity.findByIdAndUpdate(req.query.celebId, { $set: { name, occupation, catchPhrase  } }, { new: true })
    .then(theNewCelebrity => {
      console.log(theNewCelebrity)
      res.redirect('/celebrities/list')
    })
    .catch(err => console.log('Hubo un error:', err))
})

module.exports = router