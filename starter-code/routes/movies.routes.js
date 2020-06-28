const express = require('express')
const router = express.Router()

const Movie = require('../models/movie')


router.get('/', (req, res) => {
    
    Movie
        .find()
        .then(allMovies => res.render('movies/index', {allMovies}))
        .catch(err => console.log("Error en la BBDD", err))

})

router.get('/new', (req, res) => {

    res.render("movies/new")
    
})

router.post('/new', (req, res) => {

    const { title, genre, plot } = req.body

    Movie
        .create({ title, genre, plot })
        .then( newMovie => { 
            console.log("Movie created", newMovie)
            res.redirect('/')
        })
        .catch(err => console.log("Error en la BBDD", err))
})

router.get('/:id', (req, res) => {

    Movie
        .findById(req.params.id)
        .then(theMovie => res.render('movies/show', theMovie))
        .catch(err => console.log("Error en la BBDD", err))
    
})

router.post('/:id/delete', (req, res) => {

    Movie
        .findByIdAndRemove(req.params.id)
        .then(res.redirect('/'))
        .catch(err => console.log("Error al borrar el registro", err))

})

router.get('/:id/edit', (req, res) => {
    
    Movie
        .findById(req.params.id)
        .then(theMovie => res.render('movies/edit', theMovie))
        .catch(err => console.log("Error en la BBDD", err))
})

router.post('/:id', (req, res) => {

    const { title, genre, plot } = req.body

    Movie
        .findByIdAndUpdate(req.params.id, {title, genre, plot}, { new: true })
        .then(() => res.redirect('/'))
        .catch(err => console.log("Error en la BBDD", err))
})


module.exports = router
