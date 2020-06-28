const express = require('express')
const router = express.Router()

const Movies = require('./../models/movie.model')
const Celebrities = require('./../models/celebrity.model')

//Recuperar index de celebs
router.get('/index', (req, res) => {
    console.log("Endpoint index de pelis OK")
    Movies
        .find()
        .then(allMovies => res.render('movies/index', { allMovies }))
        .catch(err => console.log("Error en devolviendo bbdd de las pelis", err))
})

//Recuperar NEW
router.get('/new', (req, res) => {
    res.render('movies/new')
})

//id de movies para enseñar detalles
router.get('/:id', (req, res) => {
    console.log("Endpoint :id de movies OK")
    Movies
        .findById(req.params.id)
        .then(movie => res.render('movies/show', movie))
        .catch(err => console.log("Error en el id", err))
})

//delete movies con GET
router.get('/:id/delete', (req, res) => {
    console.log("Endpoint :id de borrar celebreties OK")
    Movies
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/movies/index'))
        .catch(err => console.log("Error en el id del delete", err))
})

//recuperar vista movies con GET
router.get('/:id/edit', (req, res) => {
    Movies
        .findById(req.params.id)
        .then(movie => res.render('movies/edit', movie)
        )
        .catch(err => console.log("Error para form editar de pelis", err))
})



// -------------POST---------------
// //CREAR peli con post
router.post('/new', (req, res) => {
    const { title, genre, plot } = req.body
    console.log(`NUEVO PELICULÓN`, title, genre, plot)
    Movies
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies/index'))
        .catch(err => console.log("Error en la creación de pelis", err))
})

// //EDITAR peli con post
router.post('/:id/edit', (req, res) => {
    const { title, genre, plot } = req.body
    console.log(`MODIFICACIÓN DE PELI`, title, genre, plot)
    Movies
        .findByIdAndUpdate(req.params.id, { title, genre, plot })
        .then(() => res.redirect('/movies/index'))
        .catch(err => console.log("Error en la edición de pelis", err))
})



module.exports = router