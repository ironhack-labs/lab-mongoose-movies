const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
    Movie.find({})
        .then(movies => res.render('movies/index', {movies}))
        .catch(err => next())
});

router.post('/', (req, res) => {
    let {title, genre, plot} = req.body;

    Movie.create({title, genre, plot})
        .then(data => {
            console.log('movie Created!')
            res.redirect('/movies');
        })
        .catch(err => next())
})

router.get('/new', (req, res) => {
    res.render('movies/new');
})

router.post('/:id/delete', (req, res) => {
    let movieId = req.params.id;

    Movie.findByIdAndRemove(movieId)
        .then(data => {
            console.log('movie Removed!')
            res.redirect('/movies');
        })
        .catch(err => next())
})

router.post('/:id/edit', (req, res) => {
    let movieId = req.params.id;

    Movie.findById(movieId)
    .then(movie => res.render('movies/edit', {movie}))
    .catch(err => next())
        
})

router.post('/:id', (req, res) => {
    let movieId = req.params.id;
    let {title, genre, plot} = req.body;

    Movie.findByIdAndUpdate(movieId,{title, genre, plot})
        .then(data => {
            console.log('movie Updated!')
            res.redirect(`/movies/${data._id}`);
        })
        .catch(err => next())
})

router.get('/:id', (req, res, next) => {
    let movieId = req.params.id;

    Movie.findById(movieId)
        .then(movie => res.render('movies/show', {movie}))
        .catch(err => next())
});

module.exports = router;