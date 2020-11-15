const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')

// Endpoints


// Listado de películas
router.get('/', (req, res, next) => {

    Movie
        .find()
        .then(allMovies => res.render('movies/movies-list', { allMovies }))     
        .catch(err => console.log(err))
    
})




// Detalle de película
router.get('/detalles/:movie_id', (req, res) => {

    const movieId = req.params.movie_id

    Movie
        .findById(movieId)
        .then(theMovie => res.render('movies/details', theMovie))
        .catch(err => console.log(err))
})

// Formulario nueva película: renderizar (GET)
router.get('/crear-pelicula', (req, res) => res.render('movies/new-movie-form'))


// Formulario nueva celebrity: gestionar (POST)
router.post('/crear-pelicula', (req, res) => {

    const { title, genre, plot } = req.body

    Movie
        .create({ title, genre, plot })
        .then(() => res.redirect('/peliculas'))
        .catch(err => console.log('Error:', err))
})

// Eliminar película
router.get('/eliminar-pelicula', (req, res) => {

    const movieId = req.query.movie_id

    Movie
        .findByIdAndDelete(movieId)
        .then(() => res.redirect('/peliculas'))
        .catch(err => console.log(err))
})

// Formulario edición película: renderizar (GET)
router.get('/editar-pelicula', (req, res) => {

    const movieId = req.query.movie_id

    Movie
        .findById(movieId)
        .then(movieInfo => res.render('movies/edit-movie-form', movieInfo))
        .catch(err => console.log(err))
})



// Formulario edición película: gestionar (POST)
router.post('/editar-pelicula', (req, res) => {

    const movieId = req.query.movie_id                            // El ID lo recibo como query string

    const { title, genre, plot } = req.body     // Los datos del formulario POST, como req.body

    Movie
        .findByIdAndUpdate(movieId, { title, genre, plot })
        .then(movieInfo => res.redirect('/peliculas'))
        .catch(err => console.log(err))
})


module.exports = router