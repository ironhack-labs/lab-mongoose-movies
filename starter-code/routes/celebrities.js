const express = require('express')
const Celebrity = require('../models/Celebrity.model.js')
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

router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
})

router.post('/celebrities/new', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body
    Celebrity.create({name, occupation, catchPhrase})
        .then((celebAdded) => {
            console.log(`A Celebrity has been added: ${celebAdded}`)
            res.redirect('/celebrities')
        })
        .catch(error => {
            console.log('Couldnt create the entry for new celebrity')
            next(error)
        })
})

module.exports = router