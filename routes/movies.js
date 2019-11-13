const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', (req, res, next) => {
    Movie.find({})
        .then(movies => {
            res.render('movies/index', { movies });
        })
        .catch(console.error);
});

router.get('/details/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => {
            res.render('movies/show', { movie });
        })
        .catch(console.error);
});

router.get('/new', (req, res, next) => {
    res.render('movies/new');
});

router.post('/', (req, res) => {
    const { title, genre, plot } = req.body;

    new Movie({
        title,
        genre,
        plot
    })
        .save()
        .then(movie => {
            res.redirect('movies');
        })
        .catch(error => {
            res.render('movies/new');
        });
});

router.post('/:id/delete', (req, res) => {
    Movie.findByIdAndRemove(req.params.id)
        .then(result => {
            res.redirect('/movies');
        })
        .catch(console.error);
});

router.get('/details/:id/edit', (req, res) => {
    const { id } = req.params;
    Movie.findById(id)
        .then(movie => {
            res.render('movies/edit', { movie });
        })
        .catch(console.error);
});

router.post('/details/:id', (req, res) => {
    const { id } = req.params;

    const { title, genre, plot } = req.body;

    Movie.findByIdAndUpdate(
        id,
        {
            title,
            genre,
            plot
        },
        { new: true }
    )
        .then(movie => {
            res.render('movies/show', { movie, updated: true });
        })
        .catch(console.error);
});

module.exports = router;
