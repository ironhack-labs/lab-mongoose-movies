const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')


// lista pelis
router.get('/movies-list', (req, res) => {
    Movie.find()
        .then(allMovies => res.render('movies/movies-list', {
            movies: allMovies
        }))
        .catch(err => console.log("Error consultadno las peliculas en la BBDD: ", err))
})


// detalles peli
router.get('/movies-details/:theMovieIdFromTheURL', (req, res) => {

    const movieId = req.params.theMovieIdFromTheURL

    Movie.findById(movieId)
        .then(theMovie => res.render('movies/movies-details', theMovie))
        .catch(err => console.log("Error consultando detalles del famoso en la BBDD: ", err))
})


// nueva peli
router.get('/movies-new', (req, res) => res.render('movies/movies-new'))
router.post('/movies-new', (req, res) => {

    const {
        title,
        genre,
        plot,
    } = req.body

    Movie.create({
            title,
            genre,
            plot,
        })
        .then(() => res.redirect('/movies/movies-list'))
        .catch(err => console.log(err))
})

// Eliminar película
router.post('/movies-list/:id', (req, res) => {

    const id = req.params.id

    Movie.findByIdAndDelete(id)
        .then((x) => res.redirect('/movies/movies-list'))
        .catch(err => console.log("ha ocurrido un error eliminando movie de la bbdd", err))
})


// Editar peli
router.get('/movies-edit', (req, res) => {

    const movieId = req.query.movieId
    console.log(req.query)
    Movie.findById(movieId)
        .then(theMovie => res.render('movies/movies-edit', theMovie))

        .catch(err => console.log(err))
})
router.post('/movies-edit/:movieId', (req, res) => {
    const movieId = req.params.movieId
    console.log("EL Id del movie que llega como URL param es:", req.params.movieId)
    Movie.findByIdAndUpdate(movieId, req.body, {
            new: true
        })
        .then(x => res.redirect(`../movies-details/${movieId}`))
        .catch(err => console.log(err))
})

module.exports = router