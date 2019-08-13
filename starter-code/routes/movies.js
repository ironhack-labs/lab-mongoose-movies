const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie');

router.get('/movies', (req, res, next) =>{
    Movie.find()
    .then(theMovies => res.render('movies/index', {theMovies}))
    .catch(err => console.log("An error just happened", err))
})


router.get('/movies/new', (req, res, next) => {
    res.render('movies/new')
})


router.get('/movies/:id', (req, res, next) => {
Movie.findById(req.params.id)
.then(theMovie => res.render('movies/show', {theMovie}))

})

router.post('/movies/create', (req, res, next) =>{
    Movie.create(req.body)
    .then(newMovie => {
        console.log("The new movie was successfully adedd to DB!", newMovie)
        res.redirect('/movies')
    })
    .catch(err => console.log("an error has happened during creating a new movie to DB", err))
})

router.post('/movies/:id/delete', (req, res, next) => {
Movie.findByIdAndDelete(req.params.id, req.body)
.then(theMovie => {
    console.log("The movie was successfully deleted ", theMovie)
    res.redirect('/movies')
} )

})

router.get('/movies/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(theMovie => res.render('movies/edit', {theMovie}))
    .catch(err => console.log("An error just happened while accessing the page ", err))
})

router.post('/movies/:id/update', (req, res, next) =>{
    Movie.findByIdAndUpdate(req.params.id, req.body)
    .then(theUpdatedMovie => {
        console.log("The movie was successfully updated! ", theUpdatedMovie);
        res.redirect('/movies');
    })
})

module.exports = router;