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
    .catch( err => console.log('Error while getting movies ', err ))
});

/* GET celebrity detail page */
router.get('/movies/:id', (req, res, next) => {
    Movie.findById( req.params.id)
    .then( foundMovie => {
        //console.log(foundCeleb)
        res.render('./movies/show', {foundMovie})
    })
    .catch( err => console.log('Error while getting movie details ', err ) )
})

module.exports = router;