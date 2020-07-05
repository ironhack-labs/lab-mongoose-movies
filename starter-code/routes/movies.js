const express = require('express')
const router = express.Router()
const Movie = require('../models/Movies.model.js')

router.get('/movies', (req, res, next) => {
    Movie.find({})
        .then(movies => res.render('movies/index', { movies }))
        .catch(e => console.log(e))   
})

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .populate('cast')
        .then(movie => res.render('movies/show', { movie: movie }))
        .catch(err => console.log('Error retrieving the movie', err))
})

router.get('/newmovie', (req, res, next) => {
    res.render('movies/new')
})

router.post('/newmovie',(req,res) => {
    const { title, genre, plot} = req.body
    Movie
        .create({ title, genre, plot})
        .then(() => res.redirect('/movies'))
        .catch(e => console.log(e))
  
})

router.post('/movies/:id/delete',(req,res) => {
    Movie.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/movies'))
        .catch(e => console.log(e))
})

router.get('/movies/:id/edit',(req,res) => {
    Movie.findById(req.params.id)
        .then(movie => res.render('movies/edit', { movie }))
        .catch(e => console.log(e))
})

router.post('/movies/:id/edit',(req,res) => {
    const {title, genre, plot} = req.body
    Movie.findByIdAndUpdate(req.params.id, { title, genre, plot }, { new: true })
        .then(() => res.redirect('/movies'))
        .catch(e => console.log(e))
})


module.exports = router 