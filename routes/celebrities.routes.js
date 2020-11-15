const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.models')


//Endpoints
router.get('/', (req, res) => {

    Celebrity
        .find()
        .then(allCelebrity => res.render('celebrities/index', { allCelebrity }))
        .catch(err => console.log(err))
})


// DETAILS
router.get('/show/:id', (req, res) => {

    Celebrity
        .findById(req.params.id)
        .then(oneCelebrity => {
            console.log(oneCelebrity)
            res.render('celebrities/show', oneCelebrity)
        })
        .catch(err => console.log(err))

})

// CREATE
router.get('/new', (req, res) => res.render('celebrities/new'))


router.post('/new', (req, res) => {

    const { name, occupation, catchPhrase } = req.body
    
    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error:', err))

})

// DELETE

router.post('/:id/delete', (req, res) => {
    
    Celebrity
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error:', err))

})

// EDIT

router.get('/:id/edit', (req, res) => {
 
    Celebrity
        .findById(req.params.id)
        .then(editCelebrity => res.render('celebrities/edit', editCelebrity ))
        .catch(err => console.log('Error', err))
})
    

router.post('/:id/edit', (req, res) => {

    const {name, occupation, catchPhrase} = req.body

    Celebrity
        .update(req.query.id, {name, occupation, catchPhrase})
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error', err))

})



module.exports = router