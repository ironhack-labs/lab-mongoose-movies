const express = require('express');
const router = express.Router()
const Celebrity = require('../models/celebrity.Model')

router.get('/celebrities', (req, res, next) =>{
    Celebrity.find({})
        .then((celebrity) => {
            res.render('celebrities/index', {celebrity:celebrity})
        })
        .catch((e) => next(e))
})

router.get('/celebrities/:id', (req, res, next) =>{
    Celebrity.findById(req.params.id)
        .then((celebrity) => {
            res.render('celebrities/show', celebrity)
        })
        .catch((e) => next(e))
})

router.get('/celebrity/new', (req, res, next) => {
    res.render('celebrities/new')
})


module.exports = router