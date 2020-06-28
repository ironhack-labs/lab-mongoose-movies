const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity')

// Endpoints
router.get('/', (req, res, next) => {

    Celebrity
        .find()
        .then(allCelebrities => res.render('celebrities/index', {allCelebrities}))
        .catch(err => console.log("Ha habido un error!", err))

})

router.get('/new', (req, res, next) => res.render('celebrities/new'))
router.post('/new', (req, res, next) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/'))
        .catch(err => console.log("Hubo un error", err))
})


router.get('/:id', (req, res, next) => {
    
    Celebrity
        .findById(req.params.id)
        .then(theCelebrity => res.render('celebrities/show', theCelebrity))
        .catch(err => console.log("Ha habido un error!", err))
})

router.post('/:id/delete', (req, res, next) => {

    Celebrity
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/'))
        .catch(err => console.log("Ha habido un error!", err))
})

router.get('/:id/edit', (req, res) => {

    Celebrity
        .findById(req.params.id)
        .then(celebrityFound => res.render('celebrities/edit', celebrityFound))
        .catch(err => console.log("Ha habido un error!", err))
})

router.post('/:id', (req, res) => {

    console.log(req.body)

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .findByIdAndUpdate(req.params.id, {name, occupation, catchPhrase}, {new:true})
        .then(() => res.redirect('/'))
        .catch(err => console.log("Ha habido un error!", err))
})







module.exports = router