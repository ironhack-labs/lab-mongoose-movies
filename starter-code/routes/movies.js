const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.js');

router.get('/', (req, res, next) => {
    Movie.find()
        .then(allMovies => {
            console.log(`/movies => ${allMovies.length} displayed`)
            res.render('movies/index', {movies: allMovies})
        })
        .catch(err => console.log('Error displaying the movies:', err))
    });

router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => res.render('movies/show', movie))
        .catch(err => console.log('Error displaying loading a celebrity page:', err))
    });

module.exports = router;