const express = require('express');
const router = express.Router();

const Movie = require('../models/movie')

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allMovies => {
            console.log(allMovies)
            res.render('movies/index', {
                movies: allMovies
            })
        })
        .catch(err => console.log(`An error has occurred while searching for movies: ${err}`))
})

router.get('/movies/new', (req, res, next) => {
    res.render('movies/new')
})

router.post('/movies/new', (req, res, next) => {
    const {
        title,
        genre,
        plot
    } = req.body;
    const newMovie = new Movie({
        title,
        genre,
        plot
    })
    newMovie.save()
        .then(() => res.redirect('/movies'))
        .catch(err => {
            console.log(`An error has occurred while adding a new movie: ${err}`)
            res.redirect('movies/new')
        })
})

router.post('/movies/:id/delete', (req, res, next) => {
    console.log(req.params.id)
    Movie.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/movies'))
        .catch(err => console.log(`An error has occurred while trying to delete the movie: ${err}`))
})

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(detailsMovies => {
            console.log(detailsMovies)
            res.render('movies/show', {
                movies: detailsMovies
            })
        })
        .catch(err => console.log(`An error has occurred while searching for the movie: ${err}`))
})

module.exports = router;