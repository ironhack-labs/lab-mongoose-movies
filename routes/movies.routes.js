const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')

// Endpoints
router.get('/', (req, res) => {
    Movie
        .find()
        .then(allMovies => res.render('movies/index', {allMovies}))
        .catch(err => console.log(err))
});
/*
router.get('/:movieId', (req,res) => {
    Movie
        .findById(req.params.movieId)
        .then(movieInfo => res.render('movies/show', {movieInfo}))
        .catch(err => console.log(err))
});

router.get('/new', (req,res) => res.render('movies/new'));

router.post('/', (req,res) => {
    const {title, genre, plot} = req.body
    if(!title || !genre || !plot) {
        res.render('movies/new', {errorMsg: 'Please fill in all the information'})
        return
    }
    Movie
        .create({title, genre, plot})
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))
});

router.post('/:movieId/delete', (req,res) => {
    Movie
        .findByIdAndRemove(req.query.movieId)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))
});

router.get('/:movieId/edit', (req,res) => {
    Movie
        .findById(req.params.movieId)
        .then(editMovie => res.render('movies/edit', {editMovie}))
        .catch(err => console.log(err))
});

router.post('/:movieId', (req,res) => {
    const {title, genre, plot} = req.body
    Movie
        .findByIdAndUpdate(req.params.movieId, {title, genre, plot})
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))
});

*/
module.exports = router