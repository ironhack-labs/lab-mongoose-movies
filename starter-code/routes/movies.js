//IT 2
const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

//IT 2
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

module.exports = router;