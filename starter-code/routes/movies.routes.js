const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')


// Endpoints
router.get('/movies', (req, res, next) => {
    Movie
        .find()
        .then(allMovies => res.render('movies/index', { allMovies }))
        .catch(err => next(err))
})

router.get('/movies/:id', (req, res, next) => {
    const movieId = req.params.id

    Movie
        .findById(movieId)
        .then(movie => res.render('movies/show', movie))
        .catch(err => next(err))

})

router.get('/movies-new', (req, res, next) => res.render('movies/new'))
router.post('/movies-new', (req, res, next) => {
    const { image, title, genre, plot } = req.body
    Movie
        .create({ image, title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => { next(err); res.render('movies/new', { errMsg: 'Try again.' }) })
})

router.get('/movies/:id/delete', (req, res, next) => {
    const movieId = req.params.id
    Movie
        .findByIdAndRemove(movieId)
        .then(() => res.redirect('/movies'))
        .catch(err => next(err))
})

router.get('/movies/:id/edit', (req, res, next) => {
    const movieId = req.params.id

    Movie
        .findById(movieId)
        .then(movie => res.render('movies/edit', movie))
        .catch(err => next(err))
})

router.post('/movies/:id/edit', (req, res, next) => {
    const movieId = req.params.id
    const { image, title, genre, plot } = req.body

    Movie
        .findByIdAndUpdate(movieId, { image, title, genre, plot })
        .then(() => res.redirect('/movies'))
        .catch(err => next(err))
})


module.exports = router