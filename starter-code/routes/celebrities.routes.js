const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity.model')


// Endpoints


// ----------------GET-------------------

//Recuperar index de celebs
router.get('/index', (req, res) => {
    console.log("Endpoint index de celebreties OK")
    Celebrity
        .find()
        .then(allCelebs => res.render('celebrities/index', { allCelebs }))
        .catch(err => console.log("Error en devolviendo bbdd", err))
})

//TODO PREGUNTA ORDEN IMPORTA, SI LO OPNGO DEBAJO de findbyid NO SALE!!
//Recuperar NEW
router.get('/new', (req, res) => {
    res.render('celebrities/new')
})
//TODO PREGUNTA ORDEN IMPORTA, SI LO OPNGO DEBAJO de findbyid NO SALE!!
//Recupearr EDIT view
router.get('/:id/edit', (req, res) => {
    // res.render('celebrities/edit')
    console.log("ENTRAS AQUí?")
    Celebrity
        .findById(req.params.id)
        .then(celeb => res.render('celebrities/edit', celeb)
        )
        .catch(err => console.log("Error para form editar", err))
})

//id de celebs para enseñar detalles
router.get('/:id', (req, res) => {
    console.log("Endpoint :id de celebreties OK")
    Celebrity
        .findById(req.params.id)
        .then(celeb => res.render('celebrities/show', celeb))
        .catch(err => console.log("Error en el id", err))
})


// ----------------POST-------------------

//delete celebrities
//TODO preguntar porqué post y no get sin más?
router.post('/:id/delete', (req, res) => {
    console.log("Endpoint :id de borrar celebreties OK")
    Celebrity
        .findByIdAndRemove(req.params.id)
        .then(celeb => res.render('celebrities/delete', celeb))
        .catch(err => console.log("Error en el id", err))
})

// //CREAR femoso con post
router.post('/new', (req, res) => {
    const { name, occupation, catchPhrase } = req.body
    console.log(`HA NACIDO UNA ESTRELLA`, name, occupation, catchPhrase)
    Celebrity
        .create({ name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities/index'))
        .catch(err => console.log("Error en la creación", err))
})

// //EDITAR femoso con post
router.post('/:id/edit', (req, res) => {
    const { name, occupation, catchPhrase } = req.body
    console.log(`HA RE-NACIDO UNA ESTRELLA`, name, occupation, catchPhrase)
    Celebrity
        .findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase })
        .then(() => res.redirect('/celebrities/index'))
        .catch(err => console.log("Error en la creación", err))
})



module.exports = router