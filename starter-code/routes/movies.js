const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.js');

// GET list of movies
router.get('/movies', (req, res) => {
    Movie.find().then((allTheMovies) => {
        res.render('../views/movies/index', {
            movies: allTheMovies,
        });
    });
});

// GET form to edit existing movies
router.get('/movies/:movieId/edit', (req, res) => {
    const movieId = req.params.movieId;
    Movie.findById(movieId)
        .then((retrievedMovie) => {
            res.render('../views/movies/edit', {
                movie: retrievedMovie,
            });
        });
});

// GET add new movie page
router.get('/movies/new', (req, res) => {
    res.render('../views/movies/new');
});

// GET movie description
router.get('/movies/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    Movie.findById(movieId).then((retrievedMovie) => {
        res.render('../views/movies/show', {
            movie: retrievedMovie,
        });
    });
});

// POST add new movie
router.post('/movies', (req, res) => {
    const {
        title,
        genre,
        plot
    } = req.body;
    const newMovie = new Movie({
        title,
        genre,
        plot,
    });
    newMovie
        .save(() => {
            res.redirect('/movies');
        })
        .catch((err) => {
            console.log(err);
            res.redirect('/movies/new');
        });
});

// POST delete selected movie
router.post('/movies/:movieId/delete', (req, res) => {
    let movieId = req.params.movieId;
    Movie.findByIdAndRemove(movieId)
        .then(() => {
            console.log('done!');
            res.redirect('/movies');
        })
        .catch((err) => console.log(err));
});

// POST edit existing movie
router.post('/movies/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    const {
        title,
        genre,
        plot
    } = req.body;
    Movie.update({
            _id: movieId,
        }, {
            $set: {
                title,
                genre,
                plot,
            },
        })
        .then(() => {
            res.redirect('/movies');
        })
        .catch((err) => console.log(err));
});

module.exports = router; 