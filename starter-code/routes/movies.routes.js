const express = require("express");
const router = express.Router();

const Movie = require("../models/Movies.model");

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((dbMovies) => res.render('movies/index', {
            dbMovies
        }))
        .catch((error) => console.log(`There was an error: ${error}`));
});

router.get('/movies/new', (req, res, next) => {
    res.render('movies/new')
});

router.post('/movies/new', (req, res) => {
    const {
        title,
        genre,
        plot
    } = req.body;

    const newMovie = new Movie({
        title,
        genre,
        plot
    })

    newMovie
        .save()
        .then(() => res.redirect('/movies'))
        .catch((error) => {
            console.log(`Something went wrong when creating a new movie, try again ${error}`),
                res.redirect('movies/new')
        });
});

router.get('/movies/:id', (req, res, next) => {
    const {
        id
    } = req.params;

    Movie.findById(id)
        .then((oneMovie) => {
            res.render('movies/show', oneMovie)
        })
        .catch((error) => console.log(`There was an error, while trying to find movie: ${error}`));
});

router.get('/movies/:id/edit', (req, res, next) => {
    const {
        id
    } = req.params;

    Movie.findById(id)
        .then((foundMovie) => {
            res.render('movies/edit', foundMovie)
        })
        .catch((error) => console.log(`There was an error, while trying to find movie: ${error}`));
});

router.post('/movies/:id/edit', (req, res, next) => {
    const {
        id
    } = req.params;

    const {
        title,
        genre,
        plot
    } = req.body;

    Movie.findByIdAndUpdate(id, {
            title,
            genre,
            plot
        }, {
            new: true
        })
        .then(() => res.redirect('/movies'))
        .catch((error) => {
            console.log(`Something went wrong when editing movie, try again ${error}`),
                res.redirect('movies/edit')
        });
});

router.post('/movies/:id/delete', (req, res, next) => {
    const {
        id
    } = req.params;
    Movie.findByIdAndDelete(id)
        .then(() => res.redirect('/movies'))
        .catch((error) => console.log(`There was an error, while trying to delete movie: ${error}`));
});

module.exports = router;