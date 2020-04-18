const express = require('express')
const router = express.Router()
const Celebrity = require('../models/celebrity')

//lista de celebrities

router.get('/', (req, res, next) => {
    Celebrity.find()
        .then(allCelebs => res.render('celebrities/index', { allCelebs }))
        .catch(err => console.log('Error', err))
})

//detalles

router.get('/details/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebDet => res.render('celebrities/show', celebDet))
        .catch(err => console.log('Error', err))
})


//nueva celeb

router.get('/new', (req, res, next) => res.render('celebrities/new'))
router.post('/new', (req, res, next) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity.create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error', err))

})

//delete celeb

router.post('/details/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log('Error', err))
})

//edit celeb 

router.get('/details/:id/edit', (req, res, next) => {

    Celebrity.findById(req.params.id)
        .then(celebEdit => res.render('celebrities/edit', { celebEdit }))
        .catch(err => console.log('Error', err))
})

router.post('/details/:id/edit', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body

    Celebrity.findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase }, { new: true })
        .then(updatedCeleb => res.redirect(`/celebrities/details/${updatedCeleb.id}`))
        .catch(err => console.log('Error', err))
})


module.exports = router