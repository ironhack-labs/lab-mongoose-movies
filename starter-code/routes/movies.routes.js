const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');


// Route to movie list
router.get('/movies', (req, res, next) =>{
    Movie.find()
    .then((movies) => {
        res.render('movies/index', {movies})
    })
    .catch(err => { console.log(`Error: ${err}`)});
});

//Route to add a new movie page
router.get('/movies/new', (req, res, next) => {
    res.render('movies/new')
});

//Route to movie details
router.get('/movies/:id', (req, res, next) => {
    const {id} = req.params;
    Movie.findById(id)
    .then((movieDetails) => {
        res.render('movies/show', {movieDetails});
    })
    .catch(err => { console.log(`Error: ${err}`)});
});

//Route to create a new movie
router.post('/movies/new', (req, res, next) => {
    const { title, genre, plot} = req.body;
    Movie.create({title, genre, plot})
    .then(() => {
        console.log('Created a new movie');
        res.redirect('/movies');
    })
    .catch(err => { console.log(`Error: ${err}`)});
});

//Route to delete movies
router.post('/movies/:id/delete', (req, res, next) => {
    const {id} = req.params;
    Movie.findByIdAndDelete(id)
    .then(() => {
        res.redirect('/movies')
    })
    .catch(err => { console.log(`Error: ${err}`)});
});

//Route to get details movie
router.get('/movies/:id/edit', (req, res, next) => {
    const {id} = req.params;
    Movie.findById(id)
    .then(movieToEdit => {
        res.render('movies/edit', movieToEdit);
    })
    .catch(err => { console.log(`Error: ${err}`)});
});

//Route to update movie details
router.post('/movies/:id/edit', (req, res, next) => {
    const {id} = req.params;
    const {title, genre, plot} = req.body;
    Movie.findByIdAndUpdate(id, {title, genre, plot})
    .then(() => {
        res.redirect('/movies')
    })
    .catch(err => { console.log(`Error: ${err}`)})
});

module.exports = router;