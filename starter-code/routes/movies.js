const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allMovies => {
            res.render('movies/index', { movies: allMovies });

        })
        .catch(error => {
            console.log('No encuentra pelicula', error);
        })

});

router.get('/movies/new', (req, res, next) => {
    res.render('movies/new')
});

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => {
            res.render('movies/show', { movie: movie });

        })
        .catch(error => {
            console.log('No encuentra datos de la pelicula', error);
        })

});

router.post('/movies', (req, res, next) => {
    const { title, genre, plot } = req.body;
    const newMovie = new Movie({ title, genre, plot })
    newMovie.save()
        .then(Movie => {
            res.redirect('movies')
        })
        .catch((error) => console.log(error))
});


module.exports = router




