const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrities.model')
router.get('/', (req, res) => {

    Celebrity
        .find()                                                                                         
        .then(allCelebrities => res.render('celebrities/index', { allCelebrities }))    
        .catch(err => console.log(err))
})


// Celebrities Show
router.get('/show/:celebrity_id', (req, res) => {

    const celebrityId = req.params.celebrity_id

    Celebrity
        .findById(celebrityId)
        
        .then(theCelebrity => res.render('celebrities/show', theCelebrity))
        .catch(err => console.log(err))
})
// Form new celebrity: render (GET)
router.get('/new', (req, res) => res.render('celebrities/new'))


// Form new celebrity: (POST)
router.post('/new', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

     Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error:', err))
})
// Form delete celebrity: (POST)
router.get('/delete', (req, res) => {

    const celebrityId = req.query.celebrity_id

    Celebrity
        .findByIdAndDelete(celebrityId)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})
// Form edit celebrity:  (GET)
router.get('/edit', (req, res) => {

    const celebrityId = req.query.celebrity_id

    Celebrity
        .findById(celebrityId)
        .then(celebrityInfo => res.render('celebrities/edit', celebrityInfo))
        .catch(err => console.log(err))
})

// Form edit celebrity:  (POST)
router.post('/edit', (req, res) => {

    const celebrityId = req.query.celebrity_id                            

    const { name, occupation, catchPhrase } = req.body    

    Celebrity
        .findByIdAndUpdate(celebrityId, { name, occupation, catchPhrase })
        .then(celebrityInfo => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})



module.exports = router