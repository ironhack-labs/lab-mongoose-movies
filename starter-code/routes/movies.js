const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.js')

//ALL MOVIES
router.get('/movies', (req,res,next) => {
    Movie.find()
    .then((movies) => {
        res.render('movies/index', { movies })
    })
    .catch(next)
})

//RENDER NEW
router.get('/new', (req,res,next) => {
    res.render('movies/new');
})

//DETAILS
router.get('/movies/:id/show', (req,res,next) => {
    let movieId = req.params.id;
    Movie.findOne({'_id': movieId})
    .then((movie) => {
        res.render('movies/show', movie)
    })
    .catch(next)
})

//CREATE NEW
router.post('/movies/new', (req,res,next) => {
    let {title, genre, plot} = req.body;
    const newMovie = new Movie({title, genre, plot})
    newMovie.save()
    .then(() => {
        res.redirect('/movies')
    })
})


//UPDATE
router.get('/movies/:id/edit', (req,res,next) => {
    let movieId = req.params.id;
    Movie.findOne({'_id': movieId})
    .then((movie) => {
        res.render('movies/edit', { movie });
    })
    .catch(next)
})

router.post('/movies/:id', (req,res,next) => {
    console.log('HEREEEEEEEEEEE');
    
    let movieId = req.params.id;
    let { title, genre, plot } = req.body;
    Movie.update({'_id': movieId}, { $set: {title ,genre, plot}})
    .then(() => {
        res.redirect('/movies')
    })
    .catch(next)
}) 

//DELETE
router.post('/movies/delete/:id', (req,res,next) => {
    let movieId = req.params.id;
    Movie.findOneAndDelete({'_id': movieId})
    .then(() => {
        res.redirect('/movies')
    })
    next()
})



module.exports = router;
