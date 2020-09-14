const express = require('express')
const Movie = require('../models/movie.model')
const router = express.Router()

router.get('/', (req, res) => {
    Movie.find()
        .then(movies => res.render('movies/index', {
            movies
        }))
        .catch(err => console.log('ERROR:', err))
})

router.get('/new', (req, res) => res.render('movies/new'))

router.post('/new', (req, res) => {
    const {
        title,
        genre,
        plot
    } = req.body
    Movie.create({
            title,
            genre,
            plot
        })
        .then(() => {
            if (
                title === undefined ||
                genre === undefined ||
                plot === undefined
            ) {
                res.redirect("/movies/new");
            } else {
                res.redirect("/movies");
            }
        })
        .catch(() => res.redirect("/movies/new"));
})

router.get('/edit/:movie_id', (req, res) => {
    const movie_id = req.params.movie_id

    Movie.findById(movie_id)
        .then(movieDetails => res.render('movies/edit', movieDetails))
        .catch(err => console.log('ERROR:', err))
})

router.post('/edit/:movie_id', (req, res) => {
    const movie_id = req.params.movie_id

    const {
        title,
        genre,
        plot
    } = req.body

    Movie.findByIdAndUpdate(movie_id, {
            title,
            genre,
            plot
        })
        .then(() => res.redirect('/movies'))
        .catch(err => res.redirect('/movies/edit', err))
})

router.post('/:movie_id/delete', (req, res) => {
    const id = req.params.movie_id
    Movie.findByIdAndDelete(id)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log('ERROR:', err))
})

router.get('/:movie_id', (req, res) => {
    const id = req.params.movie_id
    Movie.findById(id)
        .then(fullMovie => res.render('movies/show', fullMovie))
        .catch(err => console.log('ERROR:', err))
})

module.exports = router