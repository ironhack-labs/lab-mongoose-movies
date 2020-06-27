const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie.model')
const {
    route
} = require('./base.routes')

router.get('/', (req, res, next) => {
    Movie.find()
        .then(allTheMovies => res.render("movies", {
            allTheMovies
        }))
        .catch(err => {
            console.log("There was an error with the DDBB:", err)
            next()
        })
})
router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => res.render("movies/show", movie))
        .catch(err => {
            console.log("There was an error with the DDBB:", err)
            next()
        })
})
router.get("/new", (req, res, next) => {
    res.render("movies/new")
})
router.post('/:id/delete', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/movies'))
        .catch(err => {
            console.log("There was an error with the DDBB:", err)
            next()
        })
})
router.post('/', (req, res, next) => {
    Movie.create(req.body)
        .then(() => res.redirect("/movies"))
        .catch(err => {
            console.log("There was an error with the DDBB:", err)
            next()
        })
})
router.get("/:id/edit", (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => {
            res.render("movies/edit", movie)
        })
        .catch(err => {
            console.log("There was an error with the DDBB:", err)
            next()
        })
})
router.post('/:id', (req, res, next) => {
    const {
        title,
        genre,
        plot
    } = req.body
    Movie.findByIdAndUpdate(req.params.id, {
            title,
            genre,
            plot
        }, {
            new: true
        })
        .then(res.redirect("/movies"))
        .catch(err => {
            console.log("There was an error with the DDBB:", err)
            next()
        })
})
module.exports = router