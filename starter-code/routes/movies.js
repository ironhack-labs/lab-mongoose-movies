const express = require('express')
const Movie = require('../models/Movie.model.js')
const router = express.Router()

router.get('/movies', (req, res, next) => {
    Movie.find({})
        .then((theMovies) => {
            console.log(theMovies)
            res.render('movies/index', {theMovies})
        })
        .catch(error => {
            console.log('Couldnt get the movies')
            next(error)
        })
})

router.get('/movies/:id', (req, res, next) => {
    const idMov = req.params.id
    Movie.findById(idMov)
        .then((oneMovie) => {
            console.log(oneMovie.id)
            res.render('movies/show', {oneMovie})
        })
        .catch(error => {
            console.log('Couldnt get the movie')
            next(error)
        })
})

module.exports = router