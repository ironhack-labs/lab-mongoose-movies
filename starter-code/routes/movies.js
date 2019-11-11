const express = require("express");
const router = express.Router();
const Movie = require('../models/Movie')

router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(dbResp => {
            res.render('movies/index', {
                movies: dbResp
            })
        })
        .catch(err => console.log(err))
})


router.get('/movies/show/:id', (req, res) => {
    Movie
        .findById(req.params.id)
        .then(dbResp => {
            res.render('movies/show', {
                movie: dbResp
            })
        })
        .catch(err => console.log(err))
})

router.get('/movies/new', (req, res) => {
    res.render('movies/new')
})

router.post('/movies/new', (req, res) => {
    const newMovie = {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    }
    Movie
        .create(newMovie)
        .then((dbResp) => {
            res.redirect('/movies')
        })
})

router.post('/movies/delete/:id', (req, res) => {
    Movie
        .findByIdAndDelete(req.params.id)
        .then(res.redirect('/movies'))
        .catch(err => console.log(err))
})

router.get('/movies/edit/:id', (req, res) => {
    Movie
        .findById(req.params.id)
        .then(dbResp => {
            res.render('movies/edit', {
                movie: dbResp
            })
        })
        .catch(err => console.log(err))
})

router.post('/movies/edit/:id', (req, res) => {
    const updatedMovie = {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    }
    Movie
        .findByIdAndUpdate(req.params.id, updatedMovie)
        .then(
            res.redirect('/movies'))
        .catch(err => console.log(err))
})

module.exports = router