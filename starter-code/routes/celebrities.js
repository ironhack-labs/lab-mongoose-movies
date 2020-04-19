const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity')

// list
router.get('/', (req, res, next) => {
    Celebrity.find()
    .then(allCelebrities => res.render('celebrities/index', {celebrities: allCelebrities}))
    .catch(err => console.log(`An error ocurred: ${err}`)) 
})

// details
router.get('/show/:id', (req, res, next) => {
    const celebrityId = req.params.id
    
    Celebrity.findById(celebrityId)
    .then(oneCelebrity => res.render('celebrities/show', oneCelebrity))
    .catch(err => console.log(`An error ocurred: ${err}`))
})

// add
router.get('/new', (req, res, next) => res.render('celebrities/new'))
router.post('/new', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body

    Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log(`An error ocurred adding a celebrity: ${err}`))
})

// delete
router.post('/:id/delete', (req, res, next) => {
    const celebrityId = req.params.id

    Celebrity.findByIdAndRemove(celebrityId)
    .then(()  => res.redirect('/celebrities'))
    .catch(err => console.log(`An error ocurred deleting a celebrity: ${err}`))
})

// edit
router.get('/edit', (req, res, next) => {
    const celebrityId = req.query.id

    Celebrity.findById(celebrityId)
    .then(oneCelebrity => res.render('celebrities/edit', oneCelebrity))
    .catch(err => console.log(`An error ocurred updating a celebrity: ${err}`))
})

router.post('/edit/:id', (req, res, next) => {
    const celebrityId = req.params.id

    Celebrity.findByIdAndUpdate(celebrityId, req.body, { new: true })
    .then(updateCelebrity => res.redirect('/celebrities'))
    .catch(err => console.log(`An error ocurred updating a celebrity: ${err}`))
})

module.exports = router