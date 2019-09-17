const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie.js')
const Celeb = require('../models/Celeb.js')


router.get('/movies', (req, res, next) => {
    Movie.find({}).populate("celebrity")
        .then((allTheMovies) => {
            res.render('../views/movies/index', {
                movies: allTheMovies
            })
        }).catch((err) => {
            next(err)
        })
})

router.get('/movies/details/:theId', (req, res, next) => {
    let id = req.params.theId

    Movie.findById(id)
        .then((theMovie) => {
            res.render('../views/movies/show', {
                aMovie: theMovie
            })
        }).catch((err) => {
            next(err)
        })
})

router.get('/movies/new', (req, res, next) => {
    res.render('../views/movies/new')
})

router.post('/movies', (req, res, next) => {
    let title = req.body.title
    let genre = req.body.genre
    let plot = req.body.plot

    Movie.create({
        title: title,
        genre: genre,
        plot: plot
    })

    .then ((result) =>
        res.redirect('/movies')
    )

    .catch((error) => {
        res.render('../views/movies/new', {error})
    })
})

router.post('/movies/:theId/delete', (req, res, next) => {
    let id = req.params.theId

    Movie.findByIdAndRemove(id)
    .then((result) => {
        res.redirect('/movies')
    })
    .catch((err) => {
        next(err)
    })
})

router.get('/movies/:theId/edit', (req, res, next) => {
    let id = req.params.theId
    Movie.findById(id).populate("celebrity")
        .then((mov) => {
            Celeb.find({})
            .then((celebs) => {
                res.render('../views/movies/edit', {
                    mov,
                    celebs
                })
            })
        }).catch((err) => {
            next(err)
        })
})

router.post('/movies/:theId', (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.theId, req.body)
    .then((result) => {
        res.redirect('/movies')
    })
    .catch((err) => {
        next(err)
    })
})

module.exports = router;