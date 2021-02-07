const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity')

// índice de celebridades
router.get('/', (req, res) => {

  Celebrity
    .find()
    .then(celebs => res.render('celebrities/index', { celebs }))
    .catch(err => console.log(err))
})

// página de cada celeb
router.get('/:id/:name', (req, res) => {

  Celebrity
    .findById(req.params.id)
    .then(celeb => res.render('celebrities/show', { celeb }))
    .catch(err => console.log(err))
})

//formulario para añadir celeb
router.get('/new', (req, res) => res.render('celebrities/new'))
router.post('/new', (req, res) => {

  const { name, occupation, catchPhrase, image } = req.body
  const newCeleb = new Celebrity({ name, occupation, catchPhrase, image })

  newCeleb
    .save()
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log(err))
})

// editar celeb
router.get('/:id/:name/edit', (req, res) => {

  Celebrity
    .findById(req.params.id)
    .then(celeb => res.render('celebrities/edit', { celeb }))
    .catch(err => console.log(err))
})

router.post('/:id/:name/edit', (req, res) => {

  const { name, occupation, catchPhrase, image } = req.body

  Celebrity
    .findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase, image }, { new: true })
    .then(celeb => res.render('celebrities/show', { celeb }))
    .catch(err => console.log(err))
})


// eliminar celeb
router.post('/:id/delete', (req, res) => {

  Celebrity
    .findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log(err))
})

module.exports = router