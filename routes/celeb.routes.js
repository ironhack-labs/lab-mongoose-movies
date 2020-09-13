const express = require('express')
const router = express.Router()
const path = require('path')

const Celebrity = require('../models/Celebrity.model')


// Endpoints
router.get('/', (req, res) => {
    Celebrity.find()
             .then (celebs => res.render(path.join('celebrities/index'), {celebs}))
             .catch(err => console.log('ERROR:', err))
    
})

router.get('/new', (req, res) => {
    res.render('celebrities/new')

})

router.post('/', (req, res) =>{
    const {name, occupation, catchphrase} = req.body
    Celebrity.create({name, occupation, catchphrase})
             .then(celebCreated => res.redirect('/celebrities'))
             .catch(err => console.log('ERROR:', err))

})

router.post('/:id/delete', (req,res) => {
    Celebrity.findByIdAndRemove(req.params.id)
             .then( del => res.redirect('/celebrities'))
             .catch(err => console.log('ERROR: ', err))

})

router.get('/:id/edit', (req,res) => {
    Celebrity.findById(req.params.id)
             .then( celebToEdit => res.render('celebrities/edit',celebToEdit))
             .catch(err => console.log('ERROR: ', err))

})

router.get('/:id', (req,res) => {
    Celebrity.findById(req.params.id)
             .then(celeb => res.render('celebrities/show', celeb))
             .catch(err => console.log('ERROR: ', err))

})

router.post('/:id', (req, res) => {
    const id = req.params.id
    const {name, occupation, catchphrase} = req.body
    Celebrity.findByIdAndUpdate(id, {name, occupation, catchphrase})
             .then(() => res.redirect('/celebrities'))
             .catch(err => {
                 console.log('ERROR: ', err)
                })
})


module.exports = router
