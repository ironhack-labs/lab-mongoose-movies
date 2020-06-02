const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie');

/* GET movies page */

router.get('/', (req, res, next) => {
    Movie.find()
    .then(allMovies => {
        console.log(allMovies)
        res.render('movies/index', {movies: allMovies});
    })
    .catch(err => {
        console.log(('Error while searching for movies: ', err));
    });
});


router.get('/new', (req, res, next) => {
    res.render('movies/new');
});

router.post('/', (req, res, next) => {
    const {title, genre, plot} = req.body;
    const newMovie = new Movie({title, genre, plot});
    newMovie.save()
    .then(movie => {
        res.redirect('/movies')
    })
    .catch(err => {
        console.log(('Error while adding a new movie: ', err));
        res.redirect('/movies/new');
    })
});

router.get('/:id', (req, res, next) => {
    console.log(req.params.id);
    Movie.findById(req.params.id)
    .then(movie => {
        res.render('movies/show', {movie: movie});
    })
    .catch(err => {
        console.log(('Error while searching for movie data: ', err));
    });
});

router.post('/:id/delete', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
    .then(movie => res.redirect('/movies'))
    .catch(err => next(err));
});

router.get('/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movie => {
        console.log(movie)
        res.render('movies/edit', {movie});
    })
    .catch(err => next(err));
});

router.post('/:id', (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.id, req.body) //1º id do objeto que será editado, 2º objeto com os novos dados. 
    .then(movie => res.redirect('/movies'))
    .catch(err => next(err));
});

module.exports = router;