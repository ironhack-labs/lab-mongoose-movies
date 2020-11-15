const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity.model')

// Endpoints


// Listado de celebrities
router.get('/', (req, res, next) => {

    Celebrity
        .find()
        .then(allCelebrities => res.render('celebrities/celebrities-list', { allCelebrities }))     
        .catch(err => console.log(err))
    
})




// Detalle de celebrity
router.get('/detalles/:celebrity_id', (req, res) => {

    const celebrityId = req.params.celebrity_id

    Celebrity
        .findById(celebrityId)
        .then(theCelebrity => res.render('celebrities/details', theCelebrity))
        .catch(err => console.log(err))
})

// Formulario nueva celebrity: renderizar (GET)
router.get('/crear-celebrity', (req, res) => res.render('celebrities/new-celebrity-form'))


// Formulario nueva celebrity: gestionar (POST)
router.post('/crear-celebrity', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error:', err))
})

// Eliminar celebrity
router.get('/eliminar-celebrity', (req, res) => {

    const celebrityId = req.query.celebrity_id

    Celebrity
        .findByIdAndDelete(celebrityId)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})

// Formulario edición celebrity: renderizar (GET)
router.get('/editar-celebrity', (req, res) => {

    const celebrityId = req.query.celebrity_id

    Celebrity
        .findById(celebrityId)
        .then(celebrityInfo => res.render('celebrities/edit-celebrity-form', celebrityInfo))
        .catch(err => console.log(err))
})



// Formulario edición celebrity: gestionar (POST)
router.post('/editar-celebrity', (req, res) => {

    const celebrityId = req.query.celebrity_id                            // El ID lo recibodo como query string

    const { name, occupation, catchPhrase } = req.body     // Los datos del formulario POST, como req.body

    Celebrity
        .findByIdAndUpdate(celebrityId, { name, occupation, catchPhrase })
        .then(celebrityInfo => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})


module.exports = router