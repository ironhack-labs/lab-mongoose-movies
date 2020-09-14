const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model.js')

// Movies List
router.get('/list', (req, res) => {

    // Sorted the list alphabetically
    let sortedList = { title: 1}

    Movie.find({}).sort(sortedList)
        .then(movies => res.render('movies/list', {movies}))
        .catch(err => console.log('ERROR', err))

})

// Movie details
router.get('/details/:movie_id', (req, res) => {

    const id = req.params.movie_id

    Movie.findById(id)
        .then(movieDetails => res.render('movies/details', movieDetails))
        .catch(err => console.log('ERROR', err))
})

// Add movie
router.get('/new', (req, res) => res.render('movies/new'))

router.post('/new', (req, res) => {

    const { title, genre, plot } = req.body

    Movie.create({ title, genre, plot })
        .then(() => res.redirect('/movies/list'))
        .catch(err => res.redirect('/movies/new'))

})

// Delete movie
router.post('/:movie_id/delete', (req, res) => {

    const idToDelete = req.params.movie_id

    Movie.findByIdAndDelete(idToDelete)
        .then(() => res.redirect('/movies/list'))
        .catch(err => console.log('ERROR', err))
})

// Edit a movie detail
router.get('/edit', (req, res) => {

    const movie_id = req.query.movie_id
    console.log(movie_id)

    Movie.findById(movie_id)
        .then(movieToUpadate => res.render('movies/edit', movieToUpadate))
        .catch(err => console.log('ERROR', err))
})

router.post('/edit/:movie_id/', (req, res) => {

    const movie_id = req.params.movie_id
    const { title, genre, plot } = req.body

    Movie.findByIdAndUpdate(movie_id, { title, genre, plot })
        .then(() => res.redirect(`/movies/details/${movie_id}`))   
        .catch(err => console.log('ERROR', err))   

})

module.exports = router