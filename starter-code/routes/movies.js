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
//IT 10 Get que renderiza las nuevas movies
router.get('/new', (req, res, next) => {
    res.render('movies/new')
})
//IT 10 Post que guarda la info en la DB y redirige a /movies
router.post('/new', (req, res, next) => {
    //Cojo la info del form con req.body y la guardo en 3 constantes.
    const {
        title,
        genre,
        plot
    } = req.body;
    //Paso esas 3 constantes como argumentos al modelo de Celebrity y creo una nueva.
    //La guardo en una variable.
    const newMovie = new Movie({
        title,
        genre,
        plot
    })
    newMovie
        .save()
        .then((newMov) => {
            res.redirect('/movies');
        })
        .catch((err) => {
            console.log('Error while creating a new movie', err)
            res.render('movies/new')
        })
})

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