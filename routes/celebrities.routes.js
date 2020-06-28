const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity.model')

// ALL CELEB DATA
router.get('/listado', (req, res) => {
    Celebrity.find()
        .then(allCelebrities => res.render('celebrities/list', {
            allCelebrities
        }))
        .catch(err => console.log("DDBB Error", err))
})

// CELEB DETAILS
router.get('/detalle/:celebId', (req, res) => {
    Celebrity.findById(req.params.celebId)
        .then(theCelebrity => res.render('celebrities/details', theCelebrity))
        .catch(err => console.log("DDBB Error", err))
})

// CREATE CELEBRITIES
router.get('/crear', (req, res) => res.render('celebrities/create-form'))

router.post('/crear', (req, res) => {
    const {
        name,
        occupation,
        catchPhrase
    } = req.body
    Celebrity
        .create({
            name,
            occupation,
            catchPhrase
        })
        .then(() => res.redirect('listado'))
        .catch(err => console.log("DDBB Error", err))
})

// DELETE CELEBRITIES
router.post('/:id/borrar', (req, res) => {
    Celebrity.findByIdAndDelete(req.params.id)
        .then(theCelebrity => res.render('celebrities/list', theCelebrity))
        .catch(err => console.log("DDBB Error", err))
})

// EDIT CELEBRITIES
router.get('/editar', (req, res) => {
    Celebrity
        .findById(req.query.celebId)
        .then(theCeleb => res.render('celebrities/edit-form', theCeleb))
        .catch(err => console.log("DDBB Error", err))
})

router.post('/editar/:celebId', (req, res) => {
    const {
        name,
        occupation,
        catchPhrase
    } = req.body
    Celebrity
        .findByIdAndUpdate(req.params.celebId, {
            name,
            occupation,
            catchPhrase
        }, {
            new: true
        })
        .then(() => res.redirect(`/famosos/detalle/${req.params.celebId}`))
        .catch(err => console.log("DDBB Error", err))
})

module.exports = router