const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model')

// Celebrities List
router.get('/list', (req, res) => {

    // Sorted the list alphabetically
    let sortedList = { name: 1}

    Celebrity.find({}).sort(sortedList)
        .then(celebrities => res.render('celebrities/list', {celebrities}))
        .catch(err => console.log('ERROR', err))

})

// Celebrity Details
router.get('/details/:celebrity_id', (req, res) => {

    const id = req.params.celebrity_id
    
    Celebrity.findById(id)
        .then(celebrityDetails => res.render('celebrities/details', celebrityDetails))
        .catch(err => console.log('ERROR', err))
    
})

// Add new celebrity
router.get('/new', (req, res) => res.render('celebrities/new'))

router.post('/new', (req, res) => {
    
    const { name, occupation, catchPhrase, photo } = req.body

    Celebrity.create({name, occupation, catchPhrase, photo})
        .then(() => res.redirect('/celebrities/list'))
        .catch(err => res.redirect('/celebrities/new'))

})

// Delete a celebrity
router.post('/:celebrity_id/delete', (req, res) => {

    const idToDelete = req.params.celebrity_id

    Celebrity.findByIdAndDelete(idToDelete)
        .then(() => res.redirect('/celebrities/list'))
        .catch(err => console.log('ERROR', err))

})

// Edit a celebrity detail
router.get('/edit', (req, res) => {

    const celebrity_id = req.query.celebrity_id

    Celebrity.findById(celebrity_id)
        .then(celebToUpadate => res.render('celebrities/edit', celebToUpadate))
        .catch(err => console.log('ERROR', err))
})

router.post('/edit/:celebrity_id', (req, res) => {

    const celebrity_id = req.params.celebrity_id
    const { name, occupation, catchPhrase, photo } = req.body

    Celebrity.findByIdAndUpdate(celebrity_id, { name, occupation, catchPhrase, photo })
        .then(() => res.redirect('/celebrities/list'))
        .catch(err => console.log('ERROR', err))

})


module.exports = router