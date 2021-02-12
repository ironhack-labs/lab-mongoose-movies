const express = require('express')

const Celebrity = require('../models/celebrity.js')

const router = express.Router()

router.get('/celebrities', (req, res, next) => {
    Celebrity.find({})
        .then((allCelebrities) => {
            res.render('celebrities/index', {celebrities: allCelebrities})
        }).catch(error => {
            console.log('No se pudo')
            next(error)
        })
});


router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
});

router.post('/celebrities/new', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body

    Celebrity.create({
        name, occupation, catchPhrase
    }).then((celebrityAdded) => {
        res.redirect('/celebrities')
    })
    .catch(error => {
        res.render('celebrities/new')
    })
})

router.post('/celebrities/delete/:id', (req, res, next) => {
    const {id} = req.params
    
    Celebrity.findByIdAndDelete(id)
        .then(() => res.redirect('/celebrities'))
        .catch(error => next(error))
});

router.get('/celebrities/edit/:id', (req, res, next) => {
    const {id} = req.params

    Celebrity.findById(id)
        .then((updateCelebrity) => {
            res.render('celebrities/edit', {celebrities: updateCelebrity})
        })
        .catch(error => next(error))
});

router.post('/celebrities/edit/:id', (req, res, next) => {
    const {id} = req.params
    const {name, occupation, catchPhrase} = req.body

    Celebrity.findByIdAndUpdate(id, {name, occupation, catchPhrase}, {new: true})
        .then((celebrityUpdated) => {
            res.redirect(`/celebrities/${celebrityUpdated.id}`)
        })
        .catch(error => next (error))
})

router.get('/celebrities/:id', (req, res, next) => {
    const id = req.params.id

    Celebrity.findById(id)
        .then((celebrityFound) => {
            res.render('celebrities/show', {celebrity: celebrityFound})
        })
        .catch((error) => {console.log(error)})
});

module.exports = router;