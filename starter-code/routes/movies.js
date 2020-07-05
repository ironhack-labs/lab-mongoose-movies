const express = require('express')
const router = express.Router()
const Movie = require('../models/Movies.model.js')

router.get('/movies', (req, res, next) => {
    Movie.find({})
        .then(movies => res.render('movies/index', { movies: movies }))
        .catch(e => console.log(e))   
})

router.get('/movies/:id', (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => res.render('movies/show', { movie: movie }))
        .catch(err => console.log('Error retrieving the movie', err))
})

module.exports = router 