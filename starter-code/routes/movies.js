const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.js');

/* GET movies page */
router.get('/', (req, res, next) => {
    Movie.find()
        .then(allMovies => {
            res.render('movies/index', {
                movies: allMovies
            });
        }).catch(error => {
            next(error);
        });
});

module.exports = router;