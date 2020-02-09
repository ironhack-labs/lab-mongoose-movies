const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie");


router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(movie => {
            res.render('movies/index', {
                movies: movie
            });
        });
});

router.get('/movies/new', (req, res, next) => {
    res.render('movies/new');
});

router.post('/movies', (req, res, next) => {
    Movie.create({
        title: req.body.title.trim(),
        genre: req.body.genre.trim(),
        plot: req.body.plot.trim()
    })
        .then(() => {
            res.redirect('/movies');
        });
});

router.get('/movies/:id/', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => {
            res.render('movies/show', { movie });
        });
});

router.get('/movies/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => {
            res.render('movies/edit', { movie });
        });
});

router.post('/movies/:id/', (req, res, next) => {
    Movie.findByIdAndUpdate(
        req.body.id,
        {
            title: req.body.title.trim(),
            genre: req.body.genre.trim(),
            plot: req.body.plot.trim()
        },
        { new: true }
    )
        .then(() => {
            res.redirect('/movies');
        });
});

router.post('/movies/:id/delete', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/movies');
        });
});

module.exports = router;