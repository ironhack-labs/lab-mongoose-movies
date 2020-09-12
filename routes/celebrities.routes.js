console.log('10. En celebrities.routes.js')

const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model')

// Endpoints

// List of all items
router.get('/', (req, res, next) => {

    Celebrity.find()
        .then(celebrities => res.render('celebrities/index', { celebrities }))
        .catch(error => next(error))

})

// Shows detailed view of an item (READ)
router.get('/:id', (req, res, next) => {

    Celebrity.findById(req.params.id)
        .then(matchedCelebrity => {

            res.render('celebrities/show', matchedCelebrity)

        })
        .catch(error => next())

})

// Shows the view for creating a new item
router.get('/new', (req, res) => {

    res.render('celebrities/new')

})

// Creates new item into the DB (CREATE)
router.post('/new', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity.create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(error => res.render('celebrities/show', error))

})

// Deletes an item from the database (DELETE)
router.post('/delete', (req, res) => {

    Celebrity.findByIdAndRemove(req.body.id)
        .then(Celebrity.find())
        .then(res.redirect('/celebrities'))
        .catch(error => res.send(error))

})

// Shows the view for editing
router.get('/edit/:id', (req, res) => {

    Celebrity.findById(req.params.id)
        .then(matchedCelebrity => {

            res.render('celebrities/edit', matchedCelebrity)

        })
        .catch(error => next())

})

// Updates the item data and shows it's detailed view (UPDATE)
router.post('/edit/:id', (req, res) => {

    const celebrity_id = req.params.id

    const { name, occupation, catchPhrase } = req.body

    Celebrity.findByIdAndUpdate(celebrity_id, { name, occupation, catchPhrase })
        .then(() => res.redirect(`/celebrities/${celebrity_id}`))
        .catch(error => res.render('celebrities/edit', error))

})


module.exports = router
