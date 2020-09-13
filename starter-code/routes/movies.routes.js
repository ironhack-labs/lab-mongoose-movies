const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model');

// Endpoints
router.get('/', (req, res) => {
    
    Movie.find({})
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log('Ha ocurrido un error encontrando las peliculas', err))
    
})

// Movie details
router.get('/detail/:id', (req, res) => {

    const id = req.params.id

    Movie.findById(id)
        .then(movieDetails => res.render('movie-details', movieDetails))
        .catch(err => console.log('Error encontrando los detalles de la celebridad', err))

})

// Create movie
router.get('/create', (req, res) => res.render('movie-create-form'))
router.post('/create', (req, res) => {

    const { title, genre, plot } = req.body

    Movie.create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('Ha ocurrido un error creando a la celebridad', err))

})



module.exports = router
