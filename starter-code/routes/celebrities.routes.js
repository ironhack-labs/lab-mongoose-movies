const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model');

// Endpoints
router.get('/', (req, res) => {
    
    Celebrity.find({})
        .then(celebrities => res.render('celebrities', { celebrities }))
        .catch(err => console.log('Error encontrando a las celebridades: ', err))

})

// Celebrity details
router.get('/detail/:id', (req, res) => {

    const id = req.params.id

    Celebrity.findById(id)
        .then(celebrityDetails => res.render('celebrity-details', celebrityDetails))
        .catch(err => console.log('Error encontrando los detalles de la celebridad', err))

})

// Create celebrity
router.get('/create', (req, res) => res.render('create-celebrity-form'))
router.post('/create', (req, res) => {

    const { name, occupation, catchPhrase } = req.body
    
    console.log(req.body)

    Celebrity.create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Ha ocurrido un error creando a la celebridad', err))
    
})

// Update celebrity render
router.get('/edit', (req, res) => {

    const id = req.query.celebrity_id

    Celebrity.findById(id)
        .then(celebrityDetails => res.render('celebrity-update-form', celebrityDetails))
        .catch(err => console.log('Ha ocurrido un error encontrando los detalles de la celebridad', err))
    
})

// Update celebrity process
router.post('/edit/:celebrity_id', (req, res) => {

    const id = req.params.celebrity_id

    const { name, occupation, catchPhrase } = req.body

    Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase })
        .then(() => res.redirect(`/celebrities/detail/${id}`))
        .catch(err => console.log('Ha ocurrido un error actualizando a la celebridad', err))
    
})

// Delete celebrity
router.get('/delete/:id', (req, res) => {
  
    const id = req.params.id

    Celebrity.findByIdAndDelete(id)
        .then(() =>  res.redirect('/celebrities'))
        .catch(err => console.log('Ha ocurrido un error eliminado a la celebridad', err))

})


module.exports = router
