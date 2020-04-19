const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrityModel')

// Sacar la lista de nombres de las celebrities

router.get('/', (req, res, next) => {

    Celebrity.find(req.body)
        .then(allCelebrities => res.render('celebrities/celebrities', { allCelebrities }))
        .catch(err => console.log(err))

})

//Crear nuevas celebridades
router.get('/create', (req, res, next) => res.render('celebrities/create'))
router.post('/create', (req, res, next) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity.create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log(err))

})

// Editar las celebridades
router.get('/edit/:id', (req, res, next) => {

    Celebrity.findById(req.params.id)
        .then(theCelebrityEdit => res.render('celebrities/edit', theCelebrityEdit))
        .catch(err => console.log(err))

})

router.post('/edit/:id', (req, res, next) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity.findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase }, { new: true })
        .then(theUpdatedCeleb => res.redirect(`/celebrities`))
        .catch(err => console.log(err))
})

// Eliminar las celebridades

router.post('/:id/delete', (req, res, next) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity.findByIdAndRemove(req.params.id, { name, occupation, catchPhrase })
        .then(deleted => res.redirect('/celebrities'))
        .catch(err => console.log(err))

})






router.get('/:id', (req, res, next) => {

    Celebrity.findById(req.params.id)
        .then(theCelebrity => res.render('celebrities/celebrity-detail', theCelebrity))
        .catch(err => console.log(err))

})






module.exports = router;