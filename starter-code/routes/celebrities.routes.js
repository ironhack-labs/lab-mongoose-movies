const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity.model')

//Endpoints

// Mostrar listado
router.get('/', (req, res) => {
    Celebrity.find()
        .then(allCelebrities => res.render('celebrities/list', { allCelebrities }))
        .catch(err => console.log("Error en la BBDD", err))
})


//Crear celebrity
router.get('/crear-nuevo', (req, res) => res.render('celebrities/new'))
router.post('/new', (req, res) => {

    const { name, occupation, catchPrase } = req.body

    Celebrity.create({ name, occupation, catchPrase })
        .then(response => {
            console.log(response)
            res.redirect('/')
        })
        .catch(err => console.log("Error", err))


})


// Borrar celebrity
router.post('/:id/delete', (req, res) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log("Error", err))

})


// Editar celebrity
router.get('/editar/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(theCelebrity => res.render('celebrities/edit', theCelebrity))
        .catch(err => next(err)
        )
})
router.post('/editar/:id', (req, res) => {
    const { name, occupation, catchPrase } = req.body

    Celebrity.findByIdAndUpdate(req.params.id, { name, occupation, catchPrase })
        .then(() => res.redirect('/celebrities'))
        .catch(err => console.log("Error", err))
})


// Muestra detalles de una celebrity
router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(theCelebrity => res.render('celebrities/details', theCelebrity))
        .catch(err => next(err)
        )
})

module.exports = router