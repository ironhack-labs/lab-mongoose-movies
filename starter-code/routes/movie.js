const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.models.js')


router.get('/list', (req, res) => {

    Movie.find()
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log('ERROR:', err))
})


router.get('/new', (req, res) => res.render('new-movie'))

router.post('/new', (req, res) => {

    const { title, genre, plot } = req.body

    Movie.create({ title, genre, plot })
        .then(() => res.redirect('/movies/list'))
        .catch(err => console.log("ERRORR", err))
})

router.get('/delete', (req, res) => {
    Movie.findByIdAndDelete(_id)
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log('ERROR:', err))
})


router.get('/edit', (req, res) => {

    const movie_id = req.query.movie_id

    Movie.findById(movie_id)
        .then(movies => res.render('movies-edit', movies))
        .catch(err => console.log("ERRORR", err))
})

router.post('/edit/:movie_id', (req, res) => {

    const movie_id = req.params.movie_id

    const { title, genre, plot } = req.body

    Movie.findByIdAndUpdate(movie_id, { title, genre, plot })
        .then(() => res.redirect('/movies/list'))
        .catch(err => console.log("ERRORR", err))
})

router.get('/:movie_id', (req, res) => {

    const id = req.params.movie_id

    Movie.findById(id)
        .then(movies => res.render('show-movie', movies))
        .catch(err => console.log("ERRORR", err))
})

module.exports = router
