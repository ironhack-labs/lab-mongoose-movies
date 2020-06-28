const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')
const Celebrity = require('./../models/celebrity.model')

// ALL MOVIE DATA
router.get('/listadoPelis', (req, res) => {
    Movie.find()
        .then(allMovies => res.render('movies/movielist', {
            allMovies
        }))
        .catch(err => console.log("DDBB Error", err))
})

// MOVIE DETAILS
router.get('/detallePeli/:movieId', (req, res) => {
    Movie.findById(req.params.movieId)
        .then(theMovie => res.render('movies/moviedetails', theMovie))
        .catch(err => console.log("DDBB Error", err))
})

// CREATE MOVIES
router.get('/crearPeli', (req, res) => res.render('movies/create-movie-form'))

router.post('/crearPeli', (req, res) => {
    const {
        title,
        genre,
        plot
    } = req.body
    Movie
        .create({
            title,
            genre,
            plot
        })
        .then(() => res.redirect('listadoPelis'))
        .catch(err => console.log("DDBB Error", err))
})

// DELETE MOVIES
router.post('/:id/borrarPeli', (req, res) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(theMovie => res.render('movies/movielist', theMovie))
        .catch(err => console.log("DDBB Error", err))
})

// EDIT MOVIES
router.get('/editarPeli', (req, res) => {
    Movie
        .findById(req.query.movieId)
        .then(theMovie => res.render('movies/edit-movie-form', theMovie))
        .catch(err => console.log("DDBB Error", err))
})

router.post('/editarPeli/:movieId', (req, res) => {
    const {
        title,
        genre,
        plot
    } = req.body
    Movie
        .findByIdAndUpdate(req.params.movieId, {
            title,
            genre,
            plot
        }, {
            new: true
        })
        .then(() => res.redirect(`/peliculas/detallePeli/${req.params.movieId}`))
        .catch(err => console.log("DDBB Error", err))
})

module.exports = router