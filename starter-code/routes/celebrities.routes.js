const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model')

// GET
router.get('/', (req, res) =>
    Celebrity.find()
    .then(celebrities => res.render('celebrities/index', {
        celebrities: celebrities
    }))
    .catch(err => console.log(`Error al buscar en la base de datos: ${err}`))
)
router.get('/new', (req, res) =>
    res.render('celebrities/new')
)
router.get('/:id/edit', (req, res) =>
    Celebrity.findById(req.params.id)
    .then(celebrity => res.render('celebrities/edit', celebrity))
    .catch(err => console.log(`Error al eliminar de la base de datos: ${err}`))
)
router.get('/:id', (req, res) =>
    Celebrity.findById(req.params.id)
    .then(celebrity => res.render('celebrities/show', celebrity))
    .catch(err => console.log(`Error al buscar en la base de datos: ${err}`))
)

// POST
router.post('/', (req, res) => {
    Celebrity.create(req.body)
        .then(() => res.redirect('celebrities'))
        .catch(err => {
            console.log(`Error al introducir el celebrity: ${err}`)
            res.render('celebrities/new', {
                error: "Error to create new celebrity"
            })
        })
})
router.post('/:id/delete', (req, res) =>
    Celebrity.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log(`Error al eliminar de la base de datos: ${err}`))
)
router.post('/:id', (req, res) =>
    Celebrity.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log(`Error al buscar en la base de datos: ${err}`))
)


module.exports = router