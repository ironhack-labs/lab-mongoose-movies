const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model')


// Listado de celebridades
router.get('/list', (req, res) => {

  Celebrity.find()
    .then(oneCelebrity => res.render('celebrities/index', { celebrities: oneCelebrity }))
    .catch(err => console.log("Error consultadno las celebridades en la BBDD: ", err))
})

// Alta nueva celebridad
router.get('/add', (req, res) => res.render('celebrities/new')
)
router.post('/add', (req, res) => {


  const { name, occupation, catchPhrase } = req.body

  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {

      res.redirect('list')
    })
    .catch(err => console.log(err))
})

// Consulta de los datos de una celebridad
router.get('/:id', (req, res) => {

  const celebrityId = req.params.id

  Celebrity.findById(celebrityId)
    .then(celebrityDetails => res.render('celebrities/show', celebrityDetails))
    .catch(err => console.log("Error consultadno el libro en la BBDD: ", err))
})

// Eliminar celebridad
router.post('/:id/delete', (req, res) => {
  const celebrityId = req.params.id

  Celebrity.findByIdAndRemove(celebrityId)
    .then(() => res.redirect('/celebrities/list'))
    .catch(err => console.log(err))
})



module.exports = router

