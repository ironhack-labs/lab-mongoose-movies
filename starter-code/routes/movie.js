const express = require('express');
const router = express.Router();
const Movie = require('../models/movie')

/* GET home page */
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((allMovies) => {
            console.log(allMovies)
            res.render('movies/index', { movies: allMovies })
        })
        .catch((err) => {
            next(err);
        })
})

//FIND ALL MOVIES
router.get('/movies/details/:theid', (req, res, next) => {
    let id = req.params.theid

    Movie.findById(id)
        .then((movieObject) => {
            console.log(movieObject)
            res.render('movies/details', { theMovie: movieObject })
        })
        .catch((err) => {
            next(err);
        })
})

router.get('/movies/new', (req, res, next) => {
    res.render('movies/new');
})

router.post('/movie/creation', (req, res, next) => {

    let title = req.body.theTitle;
    let genre = req.body.theGenre;
    let plot = req.body.thePlot;

    Movie.create({
            title: title,
            genre: genre,
            plot: plot
        })
        .then(() => {
            res.redirect('/movies')
        })
        .catch((err) => {
            next(err);
        })
})
module.exports = router;