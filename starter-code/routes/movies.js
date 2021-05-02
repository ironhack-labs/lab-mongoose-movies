const express = require('express');
// const { reset } = require('nodemon');
const router  = express.Router();

const Movie = require('../models/movie.model');

router.get('/', (req, res, next) => {
    Movie.find({})
        .then(result => res.render('movies/index', {movies: result})) 
        .catch(err => next(err));
});

router.get('/new', (req, res, next) => {
    res.render('movies/new');
});

router.post('/new', (req, res, next) => {
    const { title, genre, plot } = req.body;
    const newMovie = new Movie({ title, genre, plot });
    Movie.create(newMovie)
        .then(res.redirect('/movies'))
        .catch(err => next(err));
});

router.get('/:movieId', (req, res, next) => {
    const { movieId } = req.params;
    Movie.findById(movieId)
        .then(result => res.render('movies/show', {movie: result}))
        .catch(err => next(err));
});

router.post('/:movieId/delete', (req, res, next) => {
    const { movieId } = req.params;
    Movie.findByIdAndRemove(movieId)
        .then(res.redirect('/movies'))
        .catch(err => next(err));
});

router.get('/:movieId/edit', (req, res, next) => {
    const { movieId } = req.params;
    Movie.findById(movieId)
        .then(result => res.render('movies/edit', {movie: result}))
        .catch(err => next(err));
});

router.post('/:movieId/edit', (req, res, next) => {
    const { movieId } = req.params;
    const { title, genre, plot } = req.body;
    Movie.findByIdAndUpdate(movieId, { title, genre, plot })
        .then(res.redirect('/movies'))
        .catch(err => next(err));
});

module.exports = router;