const express = require('express')
const router = express.Router()
const Celeb = require('../models/Celeb.js')


router.get('/celebrities', async (req, res, next) => {
    try {
        let celebs = await Celeb.find({})
        res.render('../views/celebrities/index', {
            celebs
        })
    } catch (err) {
        next(err)
    }
})

router.get('/celebrities/details/:theId', (req, res, next) => {
    let id = req.params.theId

    Celeb.findById(id)
        .then((theCelebrity) => {
            res.render('../views/celebrities/show', {
                aCeleb: theCelebrity
            })
        }).catch((err) => {
            next(err)
        })
})

router.get('/celebrities/new', (req, res, next) => {
    res.render('../views/celebrities/new')
})

router.post('/celebrities', (req, res, next) => {
    let name = req.body.theName
    let occupation = req.body.theOccupation
    let catchPhrase = req.body.theCatchPhrase

    Celeb.create({
            name: name,
            occupation: occupation,
            catchPhrase: catchPhrase
        })

        .then((result) =>
            res.redirect('/celebrities')
        )

        .catch((error) => {
            res.render('../views/celebrities/new', {
                error
            })
        })
})

router.post('/celebrities/:theId/delete', (req, res, next) => {
    let id = req.params.theId

    Celeb.findByIdAndRemove(id)
        .then((result) => {
            res.redirect('/celebrities')
        })
        .catch((err) => {
            next(err)
        })
})

router.get('/celebrities/:theId/edit', (req, res, next) => {
    let id = req.params.theId
    Celeb.findById(id)
        .then((theCeleb) => {
            res.render('../views/celebrities/edit', {
                celeb: theCeleb
            })
        }).catch((err) => {
            next(err)
        })
})

router.post('/celebrities/:theId', (req, res, next) => {
    let id = req.params.theId
    let name = req.body.theName
    let occupation = req.body.theOccupation
    let catchPhrase = req.body.theCatchPhrase

    Celeb.findByIdAndUpdate(id, {
            name: name,
            occupation: occupation,
            catchPhrase: catchPhrase
        })
        .then((result) => {
            res.redirect('/celebrities')
        })
        .catch((err) => {
            next(err)
        })
})

module.exports = router;