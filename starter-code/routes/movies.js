const express = require('express')
const router = express.Router()
const Movie = require('../models/Movies.model.js')

router.get('/movies', (req, res) => {
    Movie.find({})
        .then(movies => res.render('movies/movie-index', { movies }))
        .catch(err => console.log(err))   
})

router.get('/movies/:id', (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => res.render('movies/show', { movie: movie }))
        .catch(err => console.log('Error finding the movie', err))
})

router.get('/newmovie', (req, res) => {
    res.render('movies/new-movie')
})

router.post('/newmovie',(req,res) => {
    const { title, genre, plot} = req.body
    Movie
        .create({ title, genre, plot})
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(err))

})

router.post('/movies/:id/delete',(req,res) => {
    Movie.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/movies'))
        .catch(e => console.log(e))
})

module.exports = router