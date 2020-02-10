const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrities')


// Listado de celebrities
router.get('/', (req, res) => {
    Celebrity.find()
        .then(allCelebrities => res.render('celebrities/index', {
            celebrity: allCelebrities
        }))
        .catch(err => console.log("Error consultando las celebrities en la BBDD: ", err))
})


// Detalle de celebrity
router.get('/details/:celebrityId', (req, res) => {

    const celebrityId = req.params.celebrityId

    Celebrity.findById(celebrityId)
        .then(celebri => res.render('celebrities/show', celebri))
        .catch(err => console.log("Error consultando los detalles del celebrity en la BBDD: ", err))
})


// Creación de nuevos celebrities
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
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})


//Eliminar celebrities


router.get('/delete/:id', (req, res, next) => {

    const celebrityId = req.params.id

    Celebrity.findByIdAndRemove(celebrityId)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})

// // Editar celebrity
router.get('/edit/:celebrityId', (req, res) => {

    const celebrityId = req.params.celebrityId

    Celebrity.findById(celebrityId)
        .then(celebri => res.render('celebrities/edit', celebri))
        .catch(err => console.log(err))
})
router.post('/edit/:celebrityId', (req, res) => {

    const celebrityId = req.params.celebrityId

    Celebrity.findByIdAndUpdate(celebrityId, req.body)
        .then(x => res.redirect(`/celebrities/details/${celebrityId}`))
        .catch(err => console.log(err))
})

module.exports = router