const express = require('express');
const MovieModel = require('../models/Movie.model');

// require the Movie model here
const Movie = require('../models/Movie.model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Movie.find().then((moviesFromDB) => {
        console.log(moviesFromDB)
        res.render('movies/all-movies', { allTheMovies: moviesFromDB })
    })
});



router.get('/new', (req, res, next) => {
    res.render('movies/new')
});

router.post('/new', (req, res, next) => {
    console.log(req.body);
    Movie.create({ title: req.body.title, plot: req.body.plot, genre: req.body.genre }).then(() => {
        res.redirect('/')
    })
});

router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id).then((movie) => {
        console.log(movie)
        res.render('movies/show', movie)
    })
});

router.post('/:id/delete', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/movies')
    })
});

module.exports = router;