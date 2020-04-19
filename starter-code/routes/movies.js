const express = require('express')
const router = express.Router()

const Movie = require('../models/movie')

//list
router.get('/', (req, res, next) => {
    Movie.find()
    .then(allMovies => res.render('movies/index', {movies: allMovies}))
    .catch(err => console.log(`An error ocurred: ${err}`)) 
})

//details
router.get('/show/:id', (req, res, next) => {
    const movieId = req.params.id

    Movie.findById(movieId)
    .then(oneMovie => res.render('movies/show', oneMovie))
    .catch(err => console.log(`An error ocurred: ${err}`))
})

// add
router.get('/new', (req, res, next) => res.render('movies/new'))
router.post('/new', (req, res, next) => {
    const { title, genre, plot } = req.body

    Movie.create({ title, genre, plot })
    .then(() => res.redirect('/movies'))
    .catch(err => console.log(`An error ocurred adding the movie: ${err}`))
})

// delete

router.post('/:id/delete', (req, res, next) => {
    const movieId = req.params.id

    Movie.findByIdAndRemove(movieId)
    .then(() => res.redirect('/movies'))
    .catch(err => console.log(`An error ocurred deleting the movie: ${err}`))
})

// edit

router.get('/edit', (req, res, next) => {
    const movieId = req.query.id

    Movie.findById(movieId)
    .then(oneMovie => res.render('movies/edit', oneMovie))
    .catch(err => console.log(`An error ocurred updating the movie ${err}`))
})

router.post('/edit/:id', (req, res, next) => {
    const movieId = req.params.id

    Movie.findByIdAndUpdate(movieId, req.body, {new: true})
    .then(updateMovie => res.redirect('/movies'))
    .catch(err => console.log(`An error ocurred updating the movie: ${err}`))
})

module.exports = router