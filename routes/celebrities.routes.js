const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model');

//Lista de celebridades

router.get('/', (req, res) => {

    Celebrity.find({})
        .then(celebrities => res.render('celebrities', { celebrities }))
        .catch(err => console.log('Error encontardo:', err))

})

//Detalle de cada celebridad

router.get('/detail/:id', (req, res) => {

    const id = req.params.id

    Celebrity.findById(id)
        .then(celebrityDetails => res.render('celebrity-details', celebrityDetails))
        .catch(err => console.log('Error encontrado en los detalles de la Celebridad:', err))
})

// Crear una celebridad

router.get('/create', (req, res) => res.render('create-celebrity-form'))
router.post('/create', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity.create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Ha ocurrido un error al crear la celebridad:', err))

})

// Editar una celebridad 

router.get('/edit', (req, res) => {

    const id = req.query.celebrity_id

    Celebrity.findById(id)
        .then(celebrityDetails => res.render('celebrity-update-form', celebrityDetails))
        .catch(err => console.log('Ha ocurrido un error al editar la celebridad:', err))

})

router.post('/edit/:celebrity_id', (req, res) => {

    const id = req.params.celebrity_id

    const { name, occupation, catchPhrase } = req.body

    Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase })
        .then(() => res.redirect(`/celebrities/detail/${id}`))

})

// Eliminar una celebridad

router.get('/delete/:id', (req, res) => {

    const id = req.params.id

    Celebrity.findByIdAndDelete(id)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Ha ocurrido un error eliminado a la celebridad', err))

})


module.exports = router