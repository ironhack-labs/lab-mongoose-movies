const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

//Path to list celebrities
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(moviesFound => res.render('movies/index', {movies: moviesFound}))
        .catch(err => next(err))
})

// Create new movie
router.get('/movies/movieForm', (req, res, next) => res.render('movies/movieForm'))
router.post('/movies/movieForm', (req, res, next) => {
        const newMovie = new Movie(req.body)
        newMovie.save()
            .then(movie => {
                res.redirect('/movies')
                console.log(`The movie ${movie.title} was added`);
            })
            .catch(() => {
                console.log(`An error occurred while creating the new celebrity: ${err}`)
                res.redirect('/movie/movieForm')
            });
})

// Movie detail
router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movieFound => res.render('movies/show', movieFound))
        .catch(err => next(err));
})

// Remove movie
router.post('/movies/:id/delete', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/movies'))
        .catch(err => next(err));
})

// Edit movie
router.get('/movies/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movieToEdit => res.render('movies/movieForm', movieToEdit))
        .catch(err => next(err));
})
router.post('/movies/:id/edit', (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(() => res.redirect('/movies'))
        .catch(err => next(err));
})

module.exports = router;