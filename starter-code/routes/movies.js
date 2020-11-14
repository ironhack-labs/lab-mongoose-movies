const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie');

// Listing Our movies
router.get('/', (req, res, next) => {
    Movie
    .find()
    .then((movie)=>{
        res.render('movies/index', {movie})
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
});

//The Movie Details Page
router.get('/details/:id', (req, res, next) => {

    const movieId = req.params.id

    Movie
    .findById(movieId)
    .then(oneMovie => {
        res.render('movies/show', oneMovie)
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
})

// Adding New movies
router.get('/new', (req, res, next) => {
    
    res.render('movies/new') 
})

router.post('/', (req, res, next) => {

    const newMovie = req.body
    
    Movie
    .create(newMovie)
    .then(result => {
        console.log(result)
        res.redirect('movies')
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
})


//Deleting Movies
router.post('/:id/delete', (req, res, next) => {
    
    const id = req.params.id

    Movie
    .findByIdAndRemove(id)
    .then(result => {
        console.log(result)
        res.redirect('/movies')
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })

})

// Editing Movies
router.get('/details/:id/edit', (req, res, next) => {

    const id = req.params.id
    
    Movie
    .findById(id)
    .then(movie => {
        res.render('movies/edit', movie)
    })
    .catch((error)=>{
        console.log(error)
        next(error)
    })
})

router.post('/:id/', (req, res, next) => {

    const id = req.params.id
    const updatedMovie = req.body
    
    Movie
    .findByIdAndUpdate(id, updatedMovie)
    .then(result => {
        console.log(result)
        res.redirect('/movies')
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })

})



module.exports = router;