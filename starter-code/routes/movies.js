const express = require('express')
const router = express.Router()


const Movie = require('../models/movie.model')


router.get('/', (req, res, next) => {

    Movie.find()
    .then(movies => res.render('movies/index', { movies }))
    .catch(err => console.log('ERROR:', err))
})


router.get('/show/:movie_id', (req, res) => {

    const id = req.params.movie_id

    Movie.findById(id)
    .then(movieDetails => res.render('movies/show', movieDetails))
    .catch(err => console.log('ERROR:', err))
})


router.get('/new', (req, res) => res.render('movies/new'))
router.post('/new', (req, res) => {

    const { title, genre, plot } = req.body

    Movie.create({ title, genre, plot })
    .then(() => res.redirect('/movies'))
    .catch(err => console.log('ERROR:', err))
})


router.post('/:movie_id/delete', (req, res) => {

    const id = req.params.movie_id

    Movie.findByIdAndRemove(id)
    .then(() => res.redirect('/movies'))
    .catch(err => console.log('ERROR:', err))
})

router.get('/edit/:movie_id', (req, res) => {

    const movie_id = req.params.movie_id

    Movie.findById(movie_id)
    .then(editMovie => res.render('movies/edit', editMovie))
    .catch(err => console.log('ERROR:', err))
})

router.post('/edit/:movie_id', (req, res) => {

    const movie_id = req.params.movie_id

    const { title, genre, plot } = req.body

    Movie.findByIdAndUpdate(movie_id, { title, genre, plot })
    .then(() => res.redirect('/movies'))
    .catch(err => console.log('ERROR:', err))
})



module.exports = router