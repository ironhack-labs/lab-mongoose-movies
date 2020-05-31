const express = require('express');
const router = express.Router();

const Movie = require('../models/movie')

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allMovies => {
            console.log(allMovies)
            res.render('movies/index', {
                movies: allMovies
            })
        })
        .catch(err => console.log(`An error has occurred while searching for movies: ${err}`))
})

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(detailsMovies => {
            console.log(detailsMovies)
            res.render('movies/show', {
                movies: detailsMovies
            })
        })
        .catch(err => console.log(`An error has occurred while searching for the movie: ${err}`))
})

module.exports = router;