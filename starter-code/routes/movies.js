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

module.exports = router;