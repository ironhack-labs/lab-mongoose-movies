const express = require('express')
const router = express.Router()

const Celebrities = require('../models/celebrity.model')




router.get('/celebrities', (req, res) => {
    
    Celebrities.find()
    .then(celebrities => res.render('celebrities-index', { celebrities }))
    .catch(err => console.log('ERROR:', err))
})

router.get('/celebrities/:celebrity_id', (req, res) => {
    
    const id = req.params.celebrity_id
    
    Celebrities.findById(id)
    .then(celId => res.render('celebrity-show', celId))
    .catch(err => console.log("ERRORR", err))
})

router.get('/new', (req, res) => res.render('celebrity-create-form'))
router.post('/new', (req, res) => {
    const { name, occupation, catchPhrase } = req.body
    
    Celebrities.create({ name, occupation, catchPhrase })
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log("ERRORR", err))
})



router.post('/celebrities/:id/delete', (req, res) => {
    const id = req.params.id
    Celebrities.findByIdAndRemove(id)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log('ERROR', err))
})
module.exports = router