const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')
const mongoose = require('mongoose');


router.get('/', (req, res, next) => {

    Movie.find({})
        .then(allMovies => {
            return res.render('movies', { allMovies });
        })
        .catch(err => next(err));
});


router.get('/new', (req, res, next) => {
    res.render('movies/new');
});

router.post('/new', (req, res, next) => {

    const { title, genre, plot } = req.body;
    const newMovie = new Movie({ title, genre, plot });

    newMovie.save()
        .then((movie) => {
            res.redirect('/movies/');
        })
        .catch(err => {
            return res.render('movies/new', { errorMessage: "There was an error, please resend the form" });
        })
});

router.get('/show/:movieId', (req, res, next) => {

    let id = req.params.movieId;

    Movie.findById(id)
        .then(movieData => {
            return res.render('movies/show', { movieData });
        })
        .catch(err => next(err));
});

router.post('/:id/delete', (req, res, next) => {
    let id = req.params.id;

    Movie.findByIdAndRemove(id, (err, todo) => {

        if (err) return res.status(500).send(err);

        return res.redirect('/movies/');
    });
});

router.post('/:id/edit', (req, res, next) => {
    let id = req.params.id;
    Movie.findById(id)
        .then(movieData => {
            return res.render('movies/edit', { movieData });
        })
        .catch(err => next(err));
});

router.post('/edit', (req, res, next) => {

    const { id } = req.body;
    const { title, genre, plot } = req.body;

    Movie.updateOne({ _id: id }, { $set: { title, genre, plot } })
        .then(() => res.redirect('/movies'))
        .catch(err => next(err));
});

module.exports = router;