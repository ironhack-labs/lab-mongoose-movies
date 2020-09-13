const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model')


router.get('/', (req, res) => {

    Celebrity.find()
        .then(celebrities => res.render('celebrities/index', { celebrities }))
        .catch(err => console.log('ERROR:', err))
})












router.get('/new', (req, res) => res.render('celebrities/new'))
router.post('/new', (req, res) => {

    const { name, ocupation, catchPhrase } = req.body

    Celebrity.create({ name, ocupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('ERROR:', err))


})

router.post('/:celes_id/delete', (req, res) => {

    const id = req.params.celes_id

    Celebrity.findByIdAndRemove(id)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('ERROR:', err))
})




router.get('/:celes_id/edit', (req, res) => {

    const id = req.params.celes_id

    Celebrity.findById(id)
        .then(theFullCelebritiesDetails => res.render('celebrities/edit', theFullCelebritiesDetails))
        .catch(err => console.log('ERROR:', err))
})


router.post('/:celes_id', (req, res) => {

    const id = req.params.celes_id
    const { name, ocupation, catchPhrase } = req.body

    Celebrity.findByIdAndUpdate(id, { name, ocupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(('ERROR:', err)))
})



router.get('/:celes_id', (req, res) => {

    const id = req.params.celes_id

    Celebrity.findById(id)
        .then(theFullCelebritiesDetails => res.render('celebrities/show', theFullCelebritiesDetails))
        .catch(err => console.log('ERROR:', err))
})



module.exports = router