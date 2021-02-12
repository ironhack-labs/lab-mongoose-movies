const express   = require('express')

const Movie     = require('../models/movie.js')

const router    = express.Router()

router.get('/movies', (req, res, next) => {
    Movie.find({})
        .then((allMovies) => {
            res.render('movies/index', {movies: allMovies})
        }).catch(error => {
            console.log('No se pudo')
            next(error)
        })
});

router.get('/movies/new', (req, res, next) => {
    res.render('movies/new')
});

router.post('/movies/new', (req, res, next) => {
    const {title, genre, plot} = req.body

    Movie.create({
        title, genre, plot
    }).then((movieAdded) => {
        res.redirect('/movies')
    })
    .catch(error => {
        res.render('movies/new')
    })
});

router.post('/movies/delete/:id', (req, res, next) => {
    const {id} = req.params
    
    Movie.findByIdAndDelete(id)
        .then(() => res.redirect('/movies'))
        .catch(error => next(error))
});

router.get('/movies/edit/:id', (req, res, next) => {
    const {id} = req.params

    Movie.findById(id)
        .then((updateMovie) => {
            res.render('movies/edit', {movies: updateMovie})
        })
        .catch(error => next(error))
});

router.post('/movies/edit/:id', (req, res, next) => {
    const {id} = req.params
    const {title, genre, plot} = req.body

    Movie.findByIdAndUpdate(id, {title, genre, plot}, {new: true})
        .then((movieUpdated) => {
            res.redirect(`/movies/${movieUpdated.id}`)
        })
        .catch(error => next (error))
})

router.get('/movies/:id', (req, res, next) => {
    const id = req.params.id

    Movie.findById(id)
        .then((movieFound) => {
            res.render('movies/show', {movie: movieFound})
        })
        .catch((error) => {console.log(error)})
});

module.exports = router;