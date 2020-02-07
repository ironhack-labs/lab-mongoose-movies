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


/* GET & POST new movies */
router.get('/movies/new', (req, res, next) => {
    res.render('./movies/new')
})

router.post('/movies', (req, res, next) => {
    Movie.create( req.body )
    .then( newMovie => {
        console.log(`New movie created: ${newMovie.title}`)
        res.redirect('/movies')
    } )
    .catch( err => console.log('Error while creating a new movie ', err ) )
})


/* POST delete celebrity */
router.post('/movies/:id/delete', (req, res, next) => {
    //console.log( req.params )
    Movie.findByIdAndDelete( req.params.id )
    .then( () => res.redirect('/movies'))
    .catch( err => console.log('Error while deleting movie ', err ) )
})



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