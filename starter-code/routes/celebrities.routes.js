const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model')

// Listado de celebrities
router.get('/', (req, res) => {
  Celebrity.find()
    .then(AllCelebrities => res.render('celebrities/celebrities-list', {
      celebrities: AllCelebrities
    }))
    .catch(err => console.log(`Ha habido un error listando a las celebrities ${err}`))
})

// Detalles de las celebrities
router.get('/details/:ID', (req, res) => {
  const celebrityID = req.params.ID
  Celebrity.findById(celebrityID)
    .then(theCelebrity => res.render('celebrities/celebrities-details', theCelebrity))
    .catch(err => console.log(`Ha salido algo mal buscando la celebrity en la BBDD ${err}`))
})

// Creación de celebrities
router.get('/new', (req, res) => res.render('celebrities/celebrities-new'))
router.post('/new', (req, res) => {
  const {
    name,
    occupation,
    catchPhrase
  } = req.body
  Celebrity.create({
      name,
      occupation,
      catchPhrase
    })
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log(`Ha salido algo mal creando la nueva celebrity ${err}`))
})
// Eliminación de celebrities
router.get('/delete/:ID', (req, res) => {
  const celebrityID = req.params.ID
  Celebrity.findByIdAndDelete(celebrityID)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log(`Ha habido un error eliminando a la celebrity de la BBDD ${err}`))
})

// Editar una celebrity
router.get('/edit', (req, res) => {

  const celebrityId = req.query.id

  Celebrity.findById(celebrityId)
    .then(theCelebrity => res.render('celebrities/celebrities-edit', theCelebrity))
    .catch(err => console.log(err))
})

router.post('/edit/:id', (req, res) => {

  const celebrityId = req.params.id

  Celebrity.findByIdAndUpdate(celebrityId, req.body)
    .then(x => res.redirect(`/celebrities/details/${celebrityId}`))
    .catch(err => console.log(err))
})


module.exports = router