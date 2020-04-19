const express = require('express')
const router = express.Router()

const Movie = require('../models/movie-model')

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((allMoviesArray) => res.render('movies/index', { allMoviesArray }))
        .catch(err => {
            console.log(`An error ocurred: ${err}`)
            next()
        })
})

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movieDetails => res.render('movies/show', movieDetails))
        .catch(err => {
            console.log(`An error ocurred: ${err}`)
            next()
        })
})

router.get('/movies/new', (req, res, next) => {
    res.render('movies/new')
})

router.post('/movies/new', (req, res, next) => {
    const { title, genre, plot } = req.body;
    Movie.create({ title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(() => res.redirect('/movies/new'))
})

router.post('/movies/:id/delete', (req, res, next) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/movies'))
        .catch(() => console.log("An error happened! Sorry!!"))
    next()
})


module.exports = router;