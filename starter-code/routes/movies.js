const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')
const checkLogin = require('../middleware/checkLogin')

router.get('/', checkLogin, (req, res, next) => {
    Movie.find()
        .then(movies => {
            console.log({movies})
            res.render('movies/index', {movies})
        })
        .catch(err => {
            next(err)
        })
})

router.get('/show/:id', checkLogin, (req, res, next) => {
    const { id } = req.params
    Movie.findById(id)
        .then(movie => {
            console.log({movie})
            res.render('movies/show', {movie})
        })
        .catch(err => {
            next(err)
        })
})

router.get('/new', checkLogin, (req, res, next) => {
    res.render('movies/new')
})

router.post('/', checkLogin, (req, res, next) => {
    console.log(req.body)
    const {title, genre, plot} = req.body

    Movie.create({
        title,
        genre,
        plot
    })
        .then(movie => {
            return movie.save()
        })
        .then(movie => {
            res.redirect('/movies')
        })
        .catch(err => {
            res.render('movies/new', err)
        })
})

router.get('/show/:id/delete', checkLogin, (req, res, next) => {
    const { id } = req.params
    Movie.findByIdAndRemove(id)
        .then(result =>{
            res.redirect('/movies')
        })
        .catch(err => {
            next(err)
        })
})

router.get('/show/:id/edit', checkLogin, (req, res, next) => {
    const { id } = req.params
    Movie.findById(id)
        .then(movie => {
            res.render('movies/edit', movie)
        })
        .catch(err => {
            next(err)
        })
})

router.post('/show/:id/edit', checkLogin, (req, res, next) => {
    const {title, genre, plot} = req.body
    Movie.findByIdAndUpdate({_id: req.params.id}, {$set: {title, genre, plot}}, {new: true})
        .then(movie => {
            console.log(movie)
            res.redirect('/movies')
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router;