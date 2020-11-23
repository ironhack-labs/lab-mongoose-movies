const express = require('express');
const router  = express.Router();

const Movie = require("../models/Movie.js");

router.get('/movies', (req, res, next) =>{
    Movie.find()
        .then(movies=>{
            res.render('movies/index', {movies});
        })
        .catch(err => {
            console.log("there is an error in returning the movies");
        });
});


router.get('/movies/new', (req, res, next) => {
    res.render('movies/new');
});


router.post('/movies/new', (req, res, next) => {

    const newMovie = req.body;

    Movie.create(newMovie)
        .then(() => {
            res.redirect('/movies');
        })
        .catch(err => {
            console.log ('Error while creating new movie');
        });
});

router.get('/movies/:id', (req, res, next)=>{
    const movieId = req.params.id;
    Movie.findById(movieId)
        .then(movie => {
            res.render('movies/show', movie);
        })
        .catch(err=>{
            console.log("there is an error in returning the movie details");
        });
});
router.post('/movies/:id/delete', (req, res, next) => {
    const movieId = req.params.id;
    Movie.findByIdAndDelete(movieId)
     .then(() => {
         res.redirect('/movies');
     })
     .catch(err => {
         return err;
     });
});
router.get('/movies/:id/edit', (req, res, next) => {
    const movieId = req.params.id;

    Movie.findById(movieId)
        .then(movie => {
            res.render('movies/edit', movie);
        })
        .catch(err => {
            console.log("error while editing movies");
            return err;
        });
});

module.exports = router;