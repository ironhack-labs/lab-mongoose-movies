const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model');

// Endpoints
router.get('/', (req, res) => {
    
    Celebrity.find({})
        .then(celebrities => res.render('celebrities', { celebrities }))
        .catch(err => console.log('Error encontrando a las celebridades: ', err))

})

router.get('/:id', (req, res) => {

    const id = req.params.id

    Celebrity.findById(id)
        .then(celebrityDetails => res.render('celebrity-details', celebrityDetails))
        .catch(err => console.log('Error encontrando los detalles de la celebridad', err))

})



module.exports = router
