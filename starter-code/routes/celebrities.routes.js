const express = require('express')
const router = express.Router()

const Celebrity = require('../models/Celebrity.model')


// Listado de libros
router.get('/celebrities-list', (req, res) => {
    Celebrity.find()
        .then(allCelebrities => res.render('celebrities/celebrities-list', {
            celebrities: allCelebrities
        }))
        .catch(err => console.log("Error consultadno los libros en la BBDD: ", err))
})


// Detalle de libro
router.get('/celebrities-details/:theCelebrityIdFromTheURL', (req, res) => {

    const celebrityId = req.params.theCelebrityIdFromTheURL

    Celebrity.findById(celebrityId)
        .then(theCelebrity => res.render('celebrities/celebrities-details', theCelebrity))
        .catch(err => console.log("Error consultando detalles del famoso en la BBDD: ", err))
})


// Creación de libro
router.get('/celebrities-new', (req, res) => res.render('celebrities/celebrities-new'))
router.post('/celebrities-new', (req, res) => {

    const {
        name,
        occupation,
        catchPhrase,
    } = req.body

    Celebrity.create({
            name,
            occupation,
            catchPhrase,
        })
        .then(() => res.redirect('/celebrities/celebrities-list'))
        .catch(err => console.log(err))
})



// Editar libro
router.get('/celebrities-edit', (req, res) => {

    const celebrityId = req.query.celebrityId
    console.log(req.query)
    Celebrity.findById(celebrityId)
        .then(theCelebrity => res.render('celebrities/celebrities-edit', theCelebrity))

        .catch(err => console.log(err))
})
router.post('/celebrities-edit/:celebrityId', (req, res) => {
    const celebrityId = req.params.celebrityId
    console.log("EL Id del celebrity que llega como URL param es:", req.params.celebrityId)
    Celebrity.findByIdAndUpdate(celebrityId, req.body, {
            new: true
        })
        .then(x => res.redirect(`../celebrities-details/${celebrityId}`))
        .catch(err => console.log(err))
})

module.exports = router