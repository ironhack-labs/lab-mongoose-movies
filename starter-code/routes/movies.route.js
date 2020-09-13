const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')





router.get('/movies', (req, res) => {
    
    Movie.find()
    .then(movies => res.render('movies-index', { movies }))
    .catch(err => console.log('ERROR:', err))
})

router.get('/movies/:movie_id', (req, res) => {
    
    const id = req.params.movie_id
    
    Movie.findById(id)
    .then(movId => res.render('movies-show', movId))
    .catch(err => console.log("ERRORR", err))
})

router.get('/newMovies', (req, res) => res.render('movies-create-form'))
router.post('/newMovies', (req, res) => {

    const { title, genre, plot } = req.body
    
    Movie.create({ title, genre, plot })
    .then(() => res.redirect('/movies'))
    .catch(err => console.log("ERRORR", err))
})



router.post('/movies/:id/delete', (req, res) => {

    const id = req.params.id
    
    Movie.findByIdAndRemove(id)
    .then(() => res.redirect('/movies'))
        .catch(err => console.log('ERROR', err))
})
module.exports = router