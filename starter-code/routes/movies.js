const express = require('express')
const Movie = require('../models/Movie.model.js')
const { create } = require('../models/Movie.model.js')
const router = express.Router()

router.get('/movies', (req, res, next) => {
    Movie.find({})
        .then((theMovies) => {
            console.log(theMovies)
            res.render('movies/index', {theMovies})
        })
        .catch(error => {
            console.log('Couldnt get the movies')
            next(error)
        })
})

router.get('/movies/add-movie', (req, res, next) => {
    res.render('movies/add-movie')
})

router.post('/movies/add-movie', (req, res, next) => {
    const title = req.body.name
    const genre = req.body.genre
    const plot = req.body.plot
    Movie.create({
        title: title,
        genre: genre,
        plot: plot
    })
        .then((movieAdded) => {
            console.log(`A Movie has been added ${movieAdded}`)
            res.redirect('/movies')
        })
        .catch(error => {
            console.log('Couldnt create the entry for a new movie')
            next(error)
        })
})

router.get('/movies/:id', (req, res, next) => {
    const idMov = req.params.id
    Movie.findById(idMov)
        .then((oneMovie) => {
            console.log(oneMovie.id)
            res.render('movies/show', {oneMovie})
        })
        .catch(error => {
            console.log('Couldnt get the movie')
            next(error)
        })
})

router.post('/movies/delete/:id', (req, res, next) => {
    const idMov = req.params.id
    Movie.findByIdAndRemove(idMov)
        .then((movDeleted) => {
            console.log(movDeleted)
            res.redirect('/movies')
        })
        .catch(error => {
            console.log('Couldnt delete the movie')
            next(error)
        })
})

module.exports = router