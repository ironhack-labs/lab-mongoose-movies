const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((moviesFromDB) => {
            res.render('movies/index', {
                moviesFromDB
            });
        })
        .catch((error) => next(error));
});



router.get('/movies/new', (req, res, next) => {
    res.render('movies/new');
});

router.post('/movies/new', (req, res, next) => {
    Movie.create(req.body)
    .then((movieFromDB) => {
        res.redirect('/movies');
    })
    .catch((error) => next(error));
});

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movieFromDB) => {
        res.render('movies/show', {movieFromDB});
    })
    .catch((error) => next(error));
});

module.exports = router;