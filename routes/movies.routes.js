const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model');

// Endpoints

// Lista de peliculas
router.get('/', (req, res) => {

    Movie.find({})
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log('Ha ocurrido un error encontrando las peliculas', err))

})

// Detalle de cada pelicula
router.get('/detail/:id', (req, res) => {

    const id = req.params.id

    Movie.findById(id)
        .then(movieDetails => res.render('movie-details', movieDetails))
        .catch(err => console.log('Error encontrando los detalles de la celebridad', err))

})

// Creacion de peliculas
router.get('/create', (req, res) => res.render('movie-create-form'))
router.post('/create', (req, res) => {

    const { title, genre, plot } = req.body

    Movie.create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('Ha ocurrido un error creando a la celebridad', err))

})

// Editar las peliculas
router.get('/edit', (req, res) => {

    const id = req.query.celebrity_id

    Movie.findById(id)
        .then(celebrityDetails => res.render('movie-update-form', celebrityDetails))
        .catch(err => console.log('Ha ocurrido un error encontrando los detalles de la celebridad', err))

})


router.post('/edit/:movie_id', (req, res) => {

    const id = req.params.movie_id

    const { title, genre, plot } = req.body

    Movie.findByIdAndUpdate(id, { title, genre, plot })
        .then(() => res.redirect(`/movies/detail/${id}`))
        .catch(err => console.log('Ha ocurrido un error actualizando a la celebridad', err))

})

// Eliminar una pelicula
router.get('/delete/:id', (req, res) => {

    const id = req.params.id

    Movie.findByIdAndDelete(id)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('Ha ocurrido un error eliminado a la celebridad', err))

})


module.exports = router