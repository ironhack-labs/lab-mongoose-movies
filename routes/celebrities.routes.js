const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity.model')


// Endpoints
router.get('/', (req, res) => {

    Celebrity
        .find({}, { name: 1 })
        .then(allCelebs => res.render('celebrities/index', { allCelebs }))     
        .catch(err => console.log(err))
})

router.get('/show/:celebrity_id', (req, res) => {

    const celebId = req.params.celebrity_id

    Celebrity
        .findById(celebId)
        .then(theCelebrity => res.render('celebrities/show', theCelebrity))
        .catch(err => console.log(err))
})


//Create new Celeb

router.get('/new', (req, res) => res.render('celebrities/new'))

router.post('/new', (req, res) => {

    const { name, ocupation, catchPhrase } = req.body

    Celebrity
        .create({ name, ocupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => {
            res.render('celebrities/new')
            console.log('Error:', err)
        })
})


router.get('/delete-celebrity', (req, res) => {

    const celebId = req.query.celebrity_id

    Celebrity
        .findByIdAndDelete(celebId)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})


//BONUS 6

router.get('/edit', (req, res) => {

    const celebId = req.query.celebrity_id

    Celebrity
        .findById(celebId)
        .then(celebInfo => res.render('celebrities/edit', celebInfo))
        .catch(err => console.log(err))
})


router.post('/edit', (req, res) => {

    const celebId = req.query.celebrity_id

    const { name, ocupation, catchPhrase } = req.body     // Los datos del formulario POST, como req.body

    Celebrity
        .findByIdAndUpdate(celebId, { name, ocupation, catchPhrase })
        .then(celebInfo => res.redirect('/celebrities'))
        .catch(err => console.log(err))
})




module.exports = router