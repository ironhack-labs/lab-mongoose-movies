const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity')

router.get('/', (req, res, next) => {
    Celebrity.find()
        .then(celebrities => {
            console.log({celebrities})
            res.render('celebrities/index', {celebrities})
        })
        .catch(err => {
            next(err)
        })
})

router.get('/show/:id', (req, res, next) => {
    const { id } = req.params
    Celebrity.findById(id)
        .then(celebrity => {
            console.log({celebrity})
            res.render('celebrities/show', {celebrity})
        })
        .catch(err => {
            next(err)
        })
})

router.get('/new', (req, res, next) => {
    res.render('celebrities/new')
})

router.post('/', (req, res, next) => {
    console.log(req.body)
    const {name, occupation, catchPhrase} = req.body

    Celebrity.create({
        name,
        occupation,
        catchPhrase
    })
        .then(celebrity => {
            return celebrity.save()
        })
        .then(celebrity => {
            res.redirect('/celebrities')
        })
        .catch(err => {
            res.render('celebrity/new', err)
        })
})

router.get('/show/:id/delete', (req, res, next) => {
   const { id } = req.params
    Celebrity.findByIdAndRemove(id)
        .then(result => {
            res.redirect('/celebrities')
        })
        .catch(err => {
            next(err)
        })
})

router.get('/show/:id/edit', (req, res, next) => {
   const { id } = req.params
    Celebrity.findById(id)
        .then(celebrity => {
            res.render('celebrities/edit', celebrity)
        })
        .catch(err => {
            next(err)
        })
})

router.post('/show/:id/edit', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body
    Celebrity.findByIdAndUpdate({_id: req.params.id}, {$set: {name, occupation, catchPhrase}}, {new: true})
        .then(celebrity => {
            console.log(celebrity)
            res.redirect('/celebrities')
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router
