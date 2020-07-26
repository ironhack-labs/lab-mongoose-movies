//IT 7
const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

//IT 8
router.get('/', (req, res, next) => {
    Movie.find()
        .then(allMoviesFromDB => {
            //console.log(`${allMoviesFromDB}, movies.js`)
            res.render('movies/index.hbs', {
                movies: allMoviesFromDB
            })
        })
        .catch((err) => {
            console.log('Error while displaying the celebs, movies.js', err)
            next(err)
        })
});

//IT 9 - more info
router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(thisMovieDB => {
            console.log(`${thisMovieDB}, movies.js`)
            res.render('movies/show.hbs', {
                thisMovie: thisMovieDB
            })
        })
        .catch((err) => {
            console.log('Error while displaying info about the movie', err)
            next(err)
        })
})

module.exports = router;