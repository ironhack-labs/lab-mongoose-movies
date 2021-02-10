const express = require('express')
const Celebrity = require('../models/Celebrity.model.js')
const { create } = require('../models/Celebrity.model.js')
const router = express.Router()

router.get('/celebrities', (req, res, next) => {
    Celebrity.find({})
        .then((theCelebrities) => {
            console.log(theCelebrities)
            res.render('celebrities/index', {theCelebrities})
        })
        .catch(error => {
            console.log('Couldnt get the celebrities')
            next(error)
        })
})

router.get('/celebrities/add-celebrity', (req, res, next) => {
    res.render('celebrities/add-celebrity')
})

router.post('/celebrities/add-celebrity', (req, res, next) => {
    const name = req.body.name
    const occupation = req.body.occupation
    const catchPhrase = req.body.catchPhrase
    Celebrity.create({
        name: name,
        occupation: occupation,
        catchPhrase: catchPhrase
    })
        .then((celebAdded) => {
            console.log(`A Celebrity has been added: ${celebAdded}`)
            res.redirect('/celebrities')
        })
        .catch(error => {
            console.log('Couldnt create the entry for new celebrity')
            next(error)
        })
})

router.get('/celebrities/:id', (req, res, next) => {
    const idCeleb = req.params.id
    Celebrity.findById(idCeleb)
        .then((oneCelebrity) => {
            console.log(oneCelebrity.id)
            res.render('celebrities/show', {oneCelebrity})
        })
        .catch(error => {
            console.log('Couldnt get the celebritie')
            next(error)
        })
})

router.post('/celebrities/delete/:id', (req, res, next) => {
    const idCeleb = req.params.id
    Celebrity.findByIdAndRemove(idCeleb)
        .then((celebDeleted) => {
            console.log(celebDeleted)
            res.redirect('/celebrities')
        })
        .catch(error => {
            console.log('Couldnt delete the celebrity')
            next(error)
        })
})

router.get('celebrities/edit/:id', (req, res, next) => {
    const { id } = req.params
    Celebrity.findById(id)
        .then((celebEdit) => {
            res.render('celebrities/edit-celebrity' {celebEdit})
        })
        .catch(error => {
            console.log('Couldnt edit the celebrity')
            next(error)
        })
})

router.post('/celebrities/edit/:id', (req, res, next) => {
    const { id } = req.params
    const { name, occupation, catchPhrase } = req.body
    Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase }, { new: true })
        .then((celebEdit) => {
            res.redirect('/celebrities')
        })
        .catch(error => {
            console.log('Couldnt edit the celebrity')
            next(error)
        })
})

module.exports = router