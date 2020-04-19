const express = require('express')
const router = express.Router()

const Celebrities = require('../models/celebrity-model')

router.get('/celebrities', (req, res, next) => {
    Celebrities.find()
        .then((allCelebs) => res.render('celebrities/index', { allCelebs }))
        .catch(err => {
            console.log(`An error ocurred: ${err}`)
            next()
        })
})

router.get('/celebrities/:id', (req, res, next) => {
    Celebrities.findById(req.params.id)
        .then(celebDetails => res.render('celebrities/show', celebDetails))
        .catch(err => {
            console.log(`An error ocurred: ${err}`)
            next()
        })
})

router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
})

router.post('/celebrities/new', (req, res, next) => {
    const { name, occupation, catchphrase } = req.body;
    Celebrities.create({ name, occupation, catchphrase })
        .then(() => res.redirect('/celebrities'))
        .catch(() => res.redirect('/celebrities/new'))
})

router.post('/celebrities/:id/delete', (req, res, next) => {
    Celebrities.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/celebrities'))
        .catch(() => console.log("An error happened! Sorry!!"))
        next()
})




module.exports = router;

