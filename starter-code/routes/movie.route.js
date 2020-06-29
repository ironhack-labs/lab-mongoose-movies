const express = require('express')
const router = express.Router()

const Movie = require('../models/movie-model')

router.get('/movie-list', (req, res, next) => {
    Movie.find()
    .then(allMovies => res.render('movies-views/movie-list', {allMovies}))
    .catch(err => console.log('There was an error with the movie list.', err))
})