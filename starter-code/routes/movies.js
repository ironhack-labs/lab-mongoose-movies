const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.js');

router.get('/', (req, res, next) => {
    Movie.find()
        .then(allMovies => {
            console.log(`/movies => ${allMovies.length} displayed`)
            res.render('movies/index', {movies: allMovies})
        })
        .catch(err => console.log('Error displaying the movies:', err))
    });

router.get('/new', (req, res, next) => res.render('movies/new'))

router.post('/new', (req, res, next) => {
    const {title, genre, plot} = req.body;
    const newMovie = new Movie({title, genre, plot});
    newMovie
        .save()
        .then(item => res.redirect('/movies'))
        .catch(err => {
            console.log('Error adding a new movie:', err)
            res.render('movies/new')
        })
    });

router.post('/:id/delete', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
        .then(res.redirect('/movies'))
        .catch(err => console.log('Error removing the movie:', err))
    });

router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => res.render('movies/show', movie))
        .catch(err => console.log('Error displaying loading a movie page:', err))
    });

router.get('/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => res.render('movies/edit', movie))
        .catch(err => console.log('Error editing the movie:', err))
    });

router.post('/:id', (req, res, next) => {
    const {title, genre, plot} = req.body;
    Movie.update({_id: req.params.id}, {$set: {title, genre, plot}})
        .then(res.redirect('/movies'))
        .catch(err => console.log('Error editing the movie:', err))
    });

module.exports = router;