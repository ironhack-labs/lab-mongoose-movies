
const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')

// Movies index

router.get('/', (req, res) => {

    Movie
        .find()
        .then(allMovies => res.render('movies/moviesIndex', { allMovies }))
        .catch(err => console.log("Error in the Data Base", err))
})

// Read movie details

router.get('/show/:id', (req, res) => {

    Movie
        .findById(req.params.id)
        .then(theMovie => res.render('movies/show', theMovie))
        .catch(err => console.log("Error in the Data Base", err))
})

// Create new movies

router.get('/new', (req, res) => {
    res.render('movies/new')
})

router.post('/new', (req, res) => {

    const { title, genre, plot } = req.body

    Movie
        .create(req.body)
        .then(() => res.redirect('/movies'))
        .catch(err => {
            console.log("Error creating new movie. Try again.", err)
            res.redirect('/new')
        })
})


// Delete movie

router.post('/:id/delete', (req, res) => {

    Movie
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/movies'))
        .catch(err => {
            console.log("Error deleting movie. Try again.", err)
            res.redirect('/movies')
    })
})

// Updating movies

router.get('/edit/:id', (req, res) => {

    Movie
        .findById(req.params.id)
        .then(theMovie => res.render('movies/edit', theMovie))
        .catch(err => console.log("Error editing movie", err))
})

router.post('/:id', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Movie
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => res.redirect(`/movies/show/${req.params.id}`))
    .catch(err => console.log("Error editing movie", err))
})


module.exports = router
