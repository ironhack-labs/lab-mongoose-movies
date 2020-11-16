const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity.model')


// Endpoints
router.get('/celebrities', (req, res, next) => {
    Celebrity
        .find()
        .then(allCelebrities => res.render('celebrities/index', { allCelebrities }))
        .catch(err => next(err))
})

router.get('/celebrities/:id', (req, res, next) => {
    const celebId = req.params.id

    Celebrity
        .findById(celebId)
        .then(celebrity => res.render('celebrities/show', celebrity))
        .catch(err => next(err))

})

router.get('/celebrities-new', (req, res, next) => res.render('celebrities/new'))
router.post('/celebrities-new', (req, res, next) => {
    const { image, name, occupation, catchPhrase } = req.body
    Celebrity
        .create({ image, name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => { next(err); res.render('celebrities/new', { errMsg: 'Try again.' }) })
})

router.get('/celebrities/:id/delete', (req, res, next) => {
    const celebId = req.params.id
    Celebrity
        .findByIdAndRemove(celebId)
        .then(() => res.redirect('/celebrities'))
        .catch(err => next(err))
})

router.get('/celebrities/:id/edit', (req, res, next) => {
    const celebId = req.params.id

    Celebrity
        .findById(celebId)
        .then(celebrity => res.render('celebrities/edit', celebrity))
        .catch(err => next(err))
})

router.post('/celebrities/:id/edit', (req, res, next) => {
    const celebId = req.params.id
    const { image, name, occupation, catchPhrase } = req.body

    Celebrity
        .findByIdAndUpdate(celebId, { image, name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => next(err))
})


module.exports = router