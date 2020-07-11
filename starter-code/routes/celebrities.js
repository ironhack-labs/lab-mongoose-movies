const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrities.model.js')

router.get('/celebrities', (req, res) => {
    Celebrity.find({})
        .then(celebrities=> res.render('celebrities/celeb-index', {celebrities}))
        .catch(err => console.log(err))   
})

router.get('/celebrities/:id', (req, res) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => res.render('celebrities/show', { celebrity: celebrity }))
        .catch(err => console.log('Error finding the celebrity', err))
})

router.get('/newcelebrity', (req, res) => {
    res.render('./celebrities/new')
})

router.post('/newcelebrity',(req,res) => {
    const { name, occupation, catchPhrase } = req.body
    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(e => console.log(e))

})

router.post('/celebrities/:id/delete',(req,res) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/celebrities'))
        .catch(e => console.log(e))
})

module.exports = router

