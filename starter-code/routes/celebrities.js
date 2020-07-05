const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrities.model.js')

router.get('/celebrities', (req, res, next) => {
    Celebrity.find({})
        .then(celebrities=> res.render('celebrities/index', {celebrities: celebrities}))
        .catch(e => console.log(e))   
})

router.get('/celebrities/:id', (req, res) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => res.render('celebrities/show', { celebrity: celebrity }))
        .catch(err => console.log('Error retrieving the movie', err))
})

module.exports = router 