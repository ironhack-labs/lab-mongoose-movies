const express = require('express')
const router = express.Router()

// iteracion 2

const Celebrity = require('../models/celebrity.model')

router.get('/', (req, res, next) => {

    Celebrity.find()
    .then(celebrities => res.render('celebrities/index', { celebrities }))
    .catch(err => console.log('ERROR:', err))
})

router.get('/show/:celebs_id', (req, res) => {

    const id = req.params.celebs_id

    Celebrity.findById(id)
    .then(celebDetails => res.render('celebrities/show', celebDetails))
    .catch(err => console.log('ERROR:', err))
})


router.get('/new', (req, res) => res.render('celebrities/new'))
router.post('/new', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log('ERROR:', err))
})


router.post('/:celebs_id/delete', (req, res) => {

    const id = req.params.celebs_id

    Celebrity.findByIdAndRemove(id)
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log('ERROR:', err))    
})

router.get('/edit/:celebs_id', (req, res) => {

    const celebs_id = req.params.celebs_id

    Celebrity.findById(celebs_id)
    .then(editCeleb => res.render('celebrities/edit', editCeleb))
    .catch(err => console.log('ERROR:', err))
})

router.post('/edit/:celebs_id', (req, res) => {

    const celebs_id = req.params.celebs_id

    const { name, occupation, catchPhrase } = req.body

    Celebrity.findByIdAndUpdate(celebs_id, { name, occupation, catchPhrase })
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log('ERROR:', err))
})
module.exports = router