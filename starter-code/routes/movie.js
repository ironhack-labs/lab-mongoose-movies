const express = require('express');
const router = express.Router();
const Movie = require('../models/movie')

/* GET home page */
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((allMovies) => {
            console.log(allMovies)
            res.render('movies/index', { movies: allMovies })
        })
        .catch((err) => {
            next(err);
        })
})

module.exports = router;