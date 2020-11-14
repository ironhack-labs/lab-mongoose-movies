const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')


router.get('/', (req, res) => {

    Movie
        .find({}, { title: 1 })
        .then(allMovies => res.render('movies/index', { allMovies }))
        .catch(err => console.log(err))
})


router.get('/show/:movie_id', (req, res) => {

    const movieId = req.params.movie_id

    Movie
        .findById(movieId)
        .then(theMovie => res.render('movies/show', theMovie))
        .catch(err => console.log(err))
})


//Crear nueva pelicula

router.get('/new', (req, res) => res.render('movies/new'))

router.post('/new', (req, res) => {

    const { title, genre, plot } = req.body

    Movie
        .create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => {
            res.render('movies/new')
            console.log('Error:', err)
        })
})


//Borrar pelicula

router.get('/delete-movie', (req, res) => {

    const movieId = req.query.movie_id

    Movie
        .findByIdAndDelete(movieId)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))
})


//BONUS 12

router.get('/edit', (req, res) => {

    const movieId = req.query.movie_id

    Movie
        .findById(movieId)
        .then(movieInfo => res.render('movies/edit', movieInfo))
        .catch(err => console.log(err))
})


router.post('/edit', (req, res) => {

    const movieId = req.query.movie_id

    const { title, genre, plot } = req.body     

    Movie
        .findByIdAndUpdate(movieId, { title, genre, plot })
        .then(movieInfo => res.redirect('/movies'))
        .catch(err => console.log(err))
})






module.exports = router