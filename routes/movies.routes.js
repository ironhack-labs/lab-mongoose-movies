const express = require('express');
const { restart } = require('nodemon');
const router = express.Router()

const Movie = require('../models/movie.model');


// Endpoints

// List of movies
router.get('/', (req, res) => {
    Movie
        .find()
        .then(allMovies => {
            res.render('movies/index', { allMovies })
        })

        .catch(err => console.log(err))
})

// New movie
router.get('/new', (req, res) => res.render('movies/new'))
router.post('/new', (req, res) => {

    const { title, genre, plot } = req.body

    Movie
        .create({ title, genre, plot })
        .then(() => { res.redirect('/movies') })
        .catch(err => console.log('Error:', err))

})

// Details
router.get('/:id', (req, res) => {

    const movieId = req.params.id

    Movie
        .findById(movieId)
        .then(theMovie => res.render('movies/show', theMovie))
        .catch(err => console.log(err))
})

//Edit movie
router.get('/:id/edit', (req, res) => {
    const movieId = req.params.id

    Movie
        .findById(movieId)
        .then(theMovie => res.render('movies/edit', theMovie))
        .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res) => {
    const movieId = req.query.id
    const { title, genre, plot } = req.body

    Movie
        .update(movieId, { title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('Error:', err))

})

//Delete movie
router.post('/:id/delete', (req, res) => {

    const movieId = req.params.id

    Movie
        .findByIdAndRemove(movieId)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))
})



module.exports = router