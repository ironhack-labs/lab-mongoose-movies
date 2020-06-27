const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity.model')

// Endpoints
router.get('/', (req, res, next) => {
    Celebrity.find()
        .then(allTheCelebrities => res.render("celebrities", {
            allTheCelebrities
        }))
        .catch(err => {
            console.log("There was an error with the DDBB:", err)
            next()
        })
})

router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => res.render("celebrities/show", celebrity))
        .catch(err => {
            console.log("There was an error with the DDBB:", err)
            next()
        })
})

router.get('/new', (req, res, next) => {
    res.render("celebrities/new")
})
router.get("/:id/edit", (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => {
            res.render("celebrities/edit", celebrity)
        })
        .catch(err => {
            console.log("There was an error with the DDBB:", err)
            next()
        })
})

router.post('/', (req, res, next) => {
    Celebrity.create(req.body)
        .then(() => res.redirect("/celebrities"))
        .catch(err => {
            console.log("There was an error with the DDBB:", err)
            next()
        })
})
router.post('/:id', (req, res, next) => {
    const {
        name,
        occupation,
        cathPhrase
    } = req.body
    Celebrity.findByIdAndUpdate(req.params.id, {
            name,
            occupation,
            cathPhrase
        }, {
            new: true
        })
        .then(res.redirect("/celebrities"))
        .catch(err => {
            console.log("There was an error with the DDBB:", err)
            next()
        })
})
router.post("/:id/delete", (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then(() => res.redirect("/celebrities"))
        .catch(err => {
            console.log("There was an error with the DDBB:", err)
            next()
        })
})

module.exports = router