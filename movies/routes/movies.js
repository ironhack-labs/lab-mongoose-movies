const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

//shows all movies
router.get('/', (req, res, next) => {
    Movie.find()
    .then(movies => {
        res.render('movies/index', {movies});
    })
    .catch(error => {
        next(error);
    })
});

//shows form to add new movie
router.get('/new', (req, res, next) => {
    res.render('movies/new');
});

//process of adding a new movie. Then shows all movies
router.post('/', (req, res, next) => {
    const {title, genre, plot} = req.body;
    const movie = new Movie({title, genre, plot});
    movie.save()
    .then(()=>{
        res.redirect('/movies');
    })
    .catch(error=>{
        next(error);
    })
});

//shows celebrity details by id
router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movie=>{
        res.render('movies/show', movie);
    })
    .catch(error=>{
        next(error);
    })
});

//deletes a concrete movie
router.post('/:id/delete', (req,res,next) => {
    Movie.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.redirect('/movies');
    })
    .catch(error=>{
        next(error);
    })
});

//shows the form to edit a concrete movie
router.get('/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movie=>{
        res.render('movies/edit', movie);
    })
    .catch((error)=>{
        next(error);
    })
});
router.post('/:id', (req,res,next)=>{
    Movie.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>{
        res.redirect('/movies');
    })
    .catch(error=>{
        next(error);
    })
});

module.exports = router;