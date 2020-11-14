const { Router } = require('express')
const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model')

// Celebrities List
router.get('/', (req, res, next) => {
  Celebrity
    .find({}, { name: 1 })
    .sort({ name: 1 })
    .then(all => res.render('celebrities', { all }))
    .catch(err => console.error(err))
})


// Celebrity Details –– READ
router.get('/details/:id', (req, res, next) => {
  Celebrity
    .findById(req.params.id)
    .then(elm => res.render('celebrities/read', elm))
    .catch(err => console.log(err))
})

// Celebrity Form - GET –– CREATE
router.get('/create-celebrity', (req, res, next) => res.render('celebrities/create'))

// Celebrity Form - POST –– CREATE
router.post('/create-celebrity', (req, res, next) => {
  Celebrity
    .create({ name, occupation, catchPhrase } = req.body)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.error(err))
})


// Celebrity delete –– DELETE
router.get('/:id/delete', (req, res, next) => {
  Celebrity
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.error(err))
})


// Edit celebrity form - GET –– UPDATE
router.get('/:id/edit', (req, res, next) => {
  Celebrity
    .findById(req.params.id)
    .then(elm => res.render('celebrities/update', elm))
    .catch(err => console.log(err))
})

// Edit celebrity form - POST –– UPDATE
router.post('/:id/edit', (req, res, next) => {
  const celebId = req.params.id
  Celebrity
    .findByIdAndUpdate(celebId, { name, occupation, catchPhrase } = req.body)
    .then(elm => res.redirect(`/celebrities/details/${ celebId }`))
    .catch(err => console.log(err))
})

module.exports = router
