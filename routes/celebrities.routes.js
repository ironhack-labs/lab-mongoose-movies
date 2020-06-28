const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity.model')

router.get('/list', (req, res) => {
    Celebrity
        .find()
        .then(allCelebrities => res.render('celebrities/celeblist', {allCelebrities}))
        .catch(err => console.log('Error al acceder list de celebridades: ', err))
})

router.get('/details/:celebId', (req, res) => {
    Celebrity
        .findById(req.params.celebId)
        .then(theCeleb => {
            res.render('celebrities/show', theCeleb)
        })
        .catch(err => console.log('Error al acceder al details de la celebridad: ', err))
})

router.get('/new', (req, res) => {
    res.render('celebrities/new')
})

router.post('/create', (req, res) => {
    const {name, occupation, catchPhrase} = req.body

    Celebrity
        .create({name, occupation, catchPhrase})
        .then(() => res.redirect('/celebrities/list'))
        .catch(err => console.log('Error en al crear: ', err))
})

router.post('/:celebId/delete', (req, res) => {
    Celebrity
        .findByIdAndRemove(req.params.celebId)
        .then(() => res.redirect('/celebrities/list'))
        .catch(err => console.log('Error al borrar: ', err))
})

router.get('/:celebId/edit', (req, res) => {
    Celebrity
        .findById(req.params.celebId)
        .then(theCeleb => res.render('celebrities/edit', theCeleb))
        .catch(err => console.log('Error al acceder al edit de la celebridad: ', err))
})

router.post('/edit/:celebId', (req, res) => {
    const {name, occupation, catchPhrase} = req.body

    Celebrity
        .findByIdAndUpdate(req.params.celebId, {name, occupation, catchPhrase}, {new: true})
        .then(() => res.redirect('/celebrities/list'))
        .catch(err => console.log('Error al editar: ', err))
})

module.exports = router