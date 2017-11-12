'use strict';

const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// --- GET show movies list --- //
router.get('/movies', function(req, res, next) {
    Movie.find({}, (err, movie) => {
        if (err) {
            return next(err);
        }
        const data = {
            movies: movie
        };

        res.render('movies/index', data);
    });
});

// --- GET show form to add new movie --- //
router.get('/movies/new', function(req, res) {
    res.render('movies/new');
});

// --- GET show edit form --- //
router.get('/movies/:id/edit', function(req, res, next) {
    let movieId = req.params.id;

    Movie.findById(movieId, (err, movie) => {
        if (err) {
            return next(err);
        }
        const data = {
            movie: movie
        };
        res.render('movies/edit', data);
    });
});

// --- GET show one movie --- //
router.get('/movies/:id', function(req, res, next) {
    let movieId = req.params.id;

    Movie.findById(movieId, (err, movie) => {
        if (err) {
            return next(err);
        }
        const data = {
            movie: movie
        };
        res.render('movies/show', data);
    });
});

// --- POST add new movie --- //
router.post('/movies', function(req, res, next) {
    // pick the user inputs
    const movieInfo = {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    };

    // create new instance of Movie
    const newMovie = new Movie(movieInfo);

    // save new movie to DB
    newMovie.save((err) => {
        // if error, show the form again
        res.render('movies/new');
    });

    // if no error, redirect to the list
    return res.redirect('/movies');
});

// --- POST delete movie --- //
router.post('/movies/:id/delete', function(req, res, next) {
    let movieId = req.params.id;

    Movie.findByIdAndRemove(movieId, (err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/movies');
    });
});

// --- POST edit movie --- //
router.post('/movies/:id', function(req, res, next) {
    let movieId = req.params.id;

    const movieInfo = {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    };

    Movie.findByIdAndUpdate(movieId, movieInfo, (err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/movies');
    });

});

module.exports = router;
