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



module.exports = router
