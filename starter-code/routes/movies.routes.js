const express = require('express')
const router = express.Router()
const Movie = require('../models/movies')


// Listado de peliculas
router.get('/', (req, res) => {
    Movie.find()
        .then(allMovies => res.render('movies/index', {
            movie: allMovies
        }))
        .catch(err => console.log("Error consultando las movies en la BBDD: ", err))
})

// Detalle de pelicula
router.get('/details/:movieId', (req, res) => {

    const movieId = req.params.movieId

    Movie.findById(movieId)
        .then(mov => res.render('movies/show', mov))
        .catch(err => console.log("Error consultando los detalles de la pelicula en la BBDD: ", err))
})

// Creación de nueva pelicula
router.get('/new', (req, res) => res.render('movies/new'))
router.post('/new', (req, res) => {


    const {
        title,
        genre,
        plot
    } = req.body

    Movie.create({
            title,
            genre,
            plot
        })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))
})

//Eliminar pelicula


router.get('/delete/:id', (req, res, next) => {

    const movieId = req.params.id

    Movie.findByIdAndRemove(movieId)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))
})

// // Editar pelicula
router.get('/edit/:movieId', (req, res) => {

    const movieId = req.params.movieId

    Movie.findById(movieId)
        .then(mov => res.render('movies/edit', mov))
        .catch(err => console.log(err))
})
router.post('/edit/:movieId', (req, res) => {

    const movieId = req.params.movieId

    Movie.findByIdAndUpdate(movieId, req.body)
        .then(x => res.redirect(`/movies/details/${movieId}`))
        .catch(err => console.log(err))
})


module.exports = router