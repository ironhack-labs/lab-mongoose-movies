
const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/Celebrity.model')

// Celebrities index

router.get('/', (req, res) => {

    Celebrity
        .find()
        .then(allCelebrities => res.render('celebrities/celebritiesIndex', { allCelebrities }))
        .catch(err => console.log("Error in the Data Base", err))
})

// Read celebrity details

router.get('/show/:id', (req, res) => {

    Celebrity
        .findById(req.params.id)
        .then(theCelebrity => res.render('celebrities/show', theCelebrity))
        .catch(err => console.log("Error in the Data Base", err))
})

// Create new celebrities

router.get('/new', (req, res) => {
    res.render('celebrities/new')
})

router.post('/new', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create(req.body)
        .then(() => res.redirect('/celebrities'))
        .catch(err => {
            console.log("Error creating new celebrity. Try again.", err)
            res.redirect('/new')
        })
})


// Delete celebrities

router.post('/:id/delete', (req, res) => {

    Celebrity
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/celebrities'))
        .catch(err => {
            console.log("Error deleting celebrity. Try again.", err)
            res.redirect('/celebrities')
    })
})

// Updating celebrities

router.get('/edit/:id', (req, res) => {

    Celebrity
        .findById(req.params.id)
        .then(theCelebrity => res.render('celebrities/edit', theCelebrity))
        .catch(err => console.log("Error editing celebrity", err))
})

router.post('/:id', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => res.redirect(`/celebrities/show/${req.params.id}`))
    .catch(err => console.log("Error editing celebrity", err))
})


module.exports = router
