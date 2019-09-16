const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

router.get('/', (req, res, next) => {
    Movie.find({})
        .then(movies => {
            res.render('movies/index', { movies });
        })
        .catch(e => next(e))
});

router.get('/details/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => {
            res.render('movies/show', { movie });
        })
        .catch(e => next(e))
});

router.get('/new', (req, res, next) => {
    res.render('movies/create')
})

router.post('/', (req, res, next) => {
    Movie.create(req.body)
        .then(movie => {
            movie.save()
            res.redirect('/movies')
        })
        .catch(e => res.redirect('/movie/new'))
});

router.post('/:id/delete', (req, res, next) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(_ => {
            res.redirect('/movies');
        })
        .catch(e => next(e))
});


router.get('/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => {
            res.render('movies/edit', { movie })
        })
        .catch(e => next(e))
});

router.post('/:id', (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.id, req.body)
        .then(_ => {
            res.redirect('/movies')
        })
        .catch(e => next(e))
});

module.exports = router;