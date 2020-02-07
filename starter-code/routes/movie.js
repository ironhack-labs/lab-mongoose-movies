const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie_model')

/* GET movies  page */
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then( foundMovies => {
        //console.log(foundMovies);
        res.render('./movies/index', {foundMovies});
    })
    .catch( err => console.log('Error while getting celebrities ', err ))
});

module.exports = router;