const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie')

router.get('/', (req, res, next) => {
    Movie.find()
        .then((allTheMovies) => {
            console.log(allTheMovies)
            res.render('movies/index', {
                movies: allTheMovies
            })
        })
        .catch((err) => {
            next(err)
        })
});

router.get('/new', (req, res, next) => {
    res.render('movies/new')
})

router.get('/show/:id', (req, res, next) => {
    let id = req.params.id;

    Movie.findById(id)
        .then((movieObject) => {
            res.render('movies/show', {
                movie: movieObject
            });
        })
        .catch((err) => {
            next(err);
        })
})

router.post('/', (req, res, next) => {

    let title = req.body.theTitle;
    let genre = req.body.theGenre;
    let plot = req.body.thePlot;

    Movie.create({
            title: title,
            genre: genre,
            plot: plot
        })
        .then((result) => {
            res.redirect('/movies')
        })
        .catch((err) => {
            next(err);
        })
})

router.post('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Movie.findByIdAndRemove(id)
        .then((result) => {
            res.redirect('/movies')
        })
        .catch((err) => {
            next(err);
        })
})

router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Movie.findById(id)
        .then((theMovie) => {
            res.render('Movies/edit', {
                movie: theMovie
            })
        })
        .catch((err) => {
            next(err);
        })
})

router.post('/update/:id', (req, res, next) => {

    let id = req.params.id
    let title = req.body.theTitle;
    let genre = req.body.theGenre;
    let plot = req.body.thePlot;

    Movie.findByIdAndUpdate(id, {
            title: title,
            genre: genre,
            plot: plot
        })
        .then((result) => {
            res.redirect('/movies')
        })
        .catch((err) => {
            next(err);
        })
})










module.exports = router;