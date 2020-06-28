const express = require('express')
const router = express.Router()

const Celebrity = require ('../models/celebrity')

router.get('/', (req, res) => {

    Celebrity
        .find()
        .then(allCelebrities => res.render('celebrities/index', {allCelebrities}))
        .catch(err => console.log("Error en la BBDD", err))
})

router.get('/new', (req, res) => {

    res.render("celebrities/new")
    
})

router.post('/new', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .create({ name, occupation, catchPhrase })
        .then( newCelebrity => { 
            console.log("Celebrity creada", newCelebrity)
            res.redirect('/')
        })
        .catch(err => console.log("Error en la BBDD", err))
})

router.get('/:id', (req, res) => {

    Celebrity
        .findById(req.params.id)
        .then(theCelebrity => res.render('celebrities/show', theCelebrity))
        .catch(err => console.log("Error en la BBDD", err))
    
})

router.post('/:id/delete', (req, res) => {

    Celebrity
        .findByIdAndRemove(req.params.id)
        .then(res.redirect('/'))
        .catch(err => console.log("Error al borrar el registro", err))


})

router.get('/:id/edit', (req, res) => {
    
    Celebrity
        .findById(req.params.id)
        .then(theCelebrity => res.render('celebrities/edit', theCelebrity))
        .catch(err => console.log("Error en la BBDD", err))
})

router.post('/:id', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .findByIdAndUpdate(req.params.id, {name, occupation, catchPhrase}, { new: true })
        .then(() => res.redirect('/'))
        .catch(err => console.log("Error en la BBDD", err))
})

module.exports = router


