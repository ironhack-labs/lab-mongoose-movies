const express = require('express');
const router = express.Router();
const Movie= require('../models/movie');

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((listOfMovies) => {
        res.render('movies/index', {moviesArray: listOfMovies});
    })
    .catch((err) => {
        next(err);
    })
});

router.get('/movies/new', (req, res, next)=>{
    res.render('movies/new');
})

router.post('/movies/create', (req, res, next) => {
    const newMovie = new Movie({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    })
    
    newMovie.save()
    .then((response) => {
        res.redirect('/movies/index')
    })
    .catch((err) => {
        res.render('/movies/new')
    })
});

router.get('/movies/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
    .then((theMovie) => {
        res.render('movies/edit', {theMovie})
    })
    .catch((err) => {
        next(err)
    })
});

 router.post('/movies/:id/update', (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.id, {
        name: req.body.title,
        occupation: req.body.genre,
        catchPhrase: req.body.plot
    })
    .then((theMovie) => {
        res.redirect('/movies/index')
    })
    .catch((err) => {
        next(err)
    })
});

router.post('/movies/:id/delete', (req, res, next)=>{
    Movie.findByIdAndRemove(req.params.id)
    .then((reponse)=>{
        res.redirect('/movies/index');
    })
    .catch((err)=>{
        next(err);
    })
 });


router.get('/movies/:id', (req, res, next) => {
    const theID = req.params.id;
    Movie.findById(theID)
    .then((theMovie)=>{
        res.render('movies/show', {movie: theMovie})
    })
    .catch((err) => {
        res.send(err)
    })
});

module.exports = router;