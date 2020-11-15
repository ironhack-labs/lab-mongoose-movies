const express = require('express');
const { restart } = require('nodemon');
const router = express.Router()

const Celebrity = require('../models/celebrity.model');


// Endpoints

// Listado celebrities
router.get('/', (req, res) => {
    Celebrity
        .find()
        .then(allCelebrities => {
            res.render('celebrities/index', { allCelebrities })
        })

        .catch(err => console.log(err))
})

// Nueva celebrity
router.get('/new', (req, res) => res.render('celebrities/new'))
router.post('/new', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => { res.redirect('/celebrities') })
        .catch(err => console.log('Error:', err))

})

// // Detalle de celebrity
router.get('/:id', (req, res) => {

    const celebrityId = req.params.id

    Celebrity
        .findById(celebrityId)
        .then(theCeleb => res.render('celebrities/show', theCeleb))
        .catch(err => console.log(err))
})

//Borrar celebrity
router.post('/:id/delete', (req, res) => {

    const celebrityId = req.params.id

    Celebrity
        .findByIdAndRemove(celebrityId)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})


router.get('/:id/edit', (req, res) => {
    const celebrityId = req.params.id

    Celebrity
        .findById(celebrityId)
        .then(theCeleb => res.render('celebrities/edit', theCeleb))
        .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res) => {
    const celebrityId = req.query.id
    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .update(celebrityId, { name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error:', err))

})

module.exports = router