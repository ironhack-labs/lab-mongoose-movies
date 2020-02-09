const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model')

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(allCebs => res.render('celebrities/index', { celebrities: allCebs }))
    .catch(err => console.log(`Error al renderizar la pagina de celebrities`))
})


// FORMULARIO, CREAR CELEBRIDADES NUEVAS
router.get('/new', (req, res) => res.render('celebrities/new'))
router.post('/', (req, res) => {
  // const { name, occupation, catchPhrase } = req.body

  Celebrity.create(req.body)
    .then(() => res.redirect('/celebrities'))
    .catch(() => res.render('/new'))
})

// ELIMINAR LOS DATOS
router.post('/:id/delete', (req, res) =>
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log(`Ha habido un error al borrar los datos: ${err}`))
)

// EDIT LOS DATOS
router.get('/:id/edit', (req, res) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => res.render('celebrities/edit', celebrity))
    .catch(err => console.log(`Ha habido un error al editar los datos: ${err}`))
})

router.post('/:id', (req, res, next) => {
  Celebrity.findByIdAndUpdate(req.params.id, req.body)
    .then(celebrity => res.render('celebrities/show', celebrity))
    .catch(err => console.log(`Error al encontrar el ID en la pagina del detalle de la celebrity`))
})
// ENCONTRAR EL ID
router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => res.render('celebrities/show', celebrity))
    .catch(err => console.log(`Error al encontrar el ID en la pagina del detalle de la celebrity`))
})


module.exports = router


