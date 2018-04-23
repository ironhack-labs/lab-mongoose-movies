const express = require('express');
const router = express.Router();

const Movies = require('../models/movies');

router.get('/', (req, res, next) => {
    Movies.find({}, (err, movie) => {
        if (err) {
            next(err);
        } else {
            res.render('movies/index', {
                movie
            });
        }
    });
});

router.get('/new', (req, res, next) => {
    res.render('movies/new');
});

router.get('/:id', (req, res, next) => {
    let movieId = req.params.id;
    Movies.findById(movieId, (err, movie) => {
        if (err) {
            next(err);
        } else {
            res.render('movies/show', {
                movie
            });
        }
    });
});

router.post('/', (req, res, next) => {
    const movieInfo = {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    };

    const newMovie = new Movies(movieInfo);

    newMovie.save((err) => {
        if (err) {
            return next(err)
        } else {
            res.redirect('/movies')
        }
    });
});

router.post('/:id/delete', (req, res, next) => {
    const movieId = req.params.id;

    Movies.findByIdAndRemove(movieId, (err, movie) => {
        if (err) {
            return next(err)
        } else {
            res.redirect('/movies');
        }
    })
});

router.get('/:id/edit', (req, res, next) => {
    let movieId = req.params.id;
    Movies.findById(movieId, (err, movie) => {
        if (err) {
            next(err);
        } else {
            res.render('movies/edit', {
                movie
            });
        }
    });
});

router.post('/:id', (req, res, next) => {
    const movieId = req.params.id;

    const movieInfo = {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    };

    Movies.findByIdAndUpdate(movieId,movieInfo, (err) => {
        if (err) {
            return next(err)
        } else {
            res.redirect(`/movies/${movieId}`);
        }
    })
});

module.exports = router;