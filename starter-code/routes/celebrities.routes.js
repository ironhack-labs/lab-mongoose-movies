const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model')

router.get('/', (req, res) => {
  Celebrity.find()
    .then(allCelebrities => res.render('celebrities/index', {
      celebrities: allCelebrities
    }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
})

router.get('/details/:id', (req, res) => {

  const celebrityId = req.params.id

  Celebrity.findById(celebrityId)
    .then(theCelebrity => res.render('celebrities/show', theCelebrity))
    .catch(err => console.log("Error consultando en la BBDD: ", err))
})


router.get('/new', (req, res) => res.render('celebrities/new'))
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
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// Borrado de famosos
router.post('/:id/delete', (req, res) => {

  const celebrityId = req.params.id

  Celebrity.findByIdAndDelete(celebrityId)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log("Error borrando el famoso en la BBDD: ", err))

})

// Editar famoso
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