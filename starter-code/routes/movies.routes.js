const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model');

// Endpoints
router.get('/', (req, res) => {
    
    // Celebrity.find({})
    //     .then(celebrities => res.render('celebrities', { celebrities }))
    //     .catch(err => console.log('Error encontrando a las celebridades: ', err))

    Movie.find({})
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log('Ha ocurrido un error encontrando las peliculas', err))
    
})



module.exports = router
