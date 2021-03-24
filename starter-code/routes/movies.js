const express = require('express');
const { route } = require('../app');
const Movies = require('../models/movie')
const router  = express.Router();

/* GET home page */
router.get('/movies', (req, res, next) => {
    Movies.find()
    .then(movie =>{
        res.render('movies/movies', { movie });
    })
    .catch(error =>{
        console.log(error)
    })
});

router.get('/movies/:movieId', (req, res, next) => {
    const { movieId } = req.params

    Movies.findById(movieId)
    .then(movie =>{
        res.render('movies/show', { movie })
    })
    .catch( error => {
        next()
        console.log(error)
    })
})

router.get('/movies/new', (req, res, next) => {
    res.render('movies/new')
})

router.post('/movies/new', (req, res, next) => {
    const { title, genre, plot } = req.body

    const newMovie = {
        title: title,
        genre: genre,
        plot: plot
    }

    Movies.create(newMovie)
    .then(() =>{
        res.redirect('/movies')
    })
    .catch(error => {
        res.redirect('/movies/new')
        console.log(error)
    })
})

router.post('/movies/:id/delete', (req, res, next) =>{
    const { id } = req.params

    Movies.findByIdAndDelete(id)
    .then(() =>{
        res.redirect('/movies')
    })
    .catch(error =>{
        next()
        console.log(error)
    })
})

router.get('/movies/:id/edit', (req, res, next) =>{
    const { id } = req.params

    Movies.findById(id)
    .then(movie =>{
        res.render('movies/edit', { movie })
    })
    .catch(error =>{
        next()
        console.log(error)
    })
})

router.post('/movies/:id', (req, res, next) =>{
    const { id } = req.params
    const { title, genre, plot } = req.body

    Movies.findByIdAndUpdate(id, {title: title, genre: genre, plot: plot})
    .then(() =>{
        res.redirect('/movies')
    })
    .catch(error =>{
        next()
        console.log(error)
    })
})

module.exports = router;