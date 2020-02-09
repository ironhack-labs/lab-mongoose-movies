const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

// Index - Show all movies
router.get('/', (req, res, next) => {
    Movie.find()
    .then(movies => res.render('movies/index', {movies}))
    .catch(error => console.log(error));
});

// New - Show form to add movie
router.get('/new', (req, res, next) => {
    res.render('movies/new');
});

// Create - Add movie to DB
router.post('/', (req, res, next) => {
    const {title, genre, plot} = req.body;
    const newMovie = new Movie({title, genre, plot});
    newMovie.save()
    .then(()=> res.redirect('/movies'))
    .catch(() => res.render('movies/new'));
});

// Show more info about specific movie
router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movie => res.render('movies/show', movie))
    .catch(error => console.log(error));
});

// Delete - Delete a specific movie
router.post('/:id/delete', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/movies'))
    .catch(error => console.log(error));
});

// Edit - Show form to edit info about specific movie
router.get('/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movie => res.render('movies/edit', movie))
    .catch(error => console.log(error));
});

// Update - Update movie's info
router.post('/:id', (req, res, next) => {
    const {title, genre, plot} = req.body;
    Movie.update({_id: req.params.id}, {$set: {title, genre, plot}})
    .then(() => res.redirect('/movies'))
    .catch(error => console.log(error));
})


module.exports = router;