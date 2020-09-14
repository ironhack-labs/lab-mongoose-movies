const express = require('express')
const router = express.Router()
const Celebrity = require('../models/celebrity.model')

// Endpoints
router.get('/', (req, res) => {   // Show all names of celebs
    Celebrity.find()
        .then(allCelebrities => res.render('celebrities/index', {allCelebrities}))
        .catch(err => console.log(`Error ${err}`))
})

router.get('/new', (req, res) => res.render('celebrities/new'))  // view with form by create new celebrities

router.post('/new', (req, res) => {     // create a new celebrity an redirects to celebrities
    const { name, ocupation, catchPhrase } = req.body
    Celebrity.create({ name, ocupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(`Error ${err}`))
})

router.get('/:id/delete', (req, res) => {  
    const id = req.params.id

    Celebrity.findByIdAndRemove(id)
        .then(() => res.redirect('/celebrities'))
        .catch(() => console.log(`Error ${err}`))
})

router.get('/:id/edit', (req, res) => {
    const id = req.params.id

    //res.send("Hola")
    Celebrity.findByIdAndUpdate(id)
        .then(updateCelebrity => res.render('celebrities/edit', updateCelebrity))
        .catch(err => console.log(`Error ${err}`))
})

router.post('/:id/new', (req, res) => {
    const id = req.params.id
    const { name, ocupation, catchPhrase } = req.body
    Celebrity.findByIdAndUpdate(id, { name, ocupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(`Error ${err}`))
})


router.get('/:id', (req, res) => {  // Show only one celebrity by id
    const id = req.params.id

    Celebrity.findById(id)
        .then(singleCelebrity => res.render('celebrities/show', {singleCelebrity}))
        .catch(err => console.log(`Error ${err}`))
})

module.exports = router