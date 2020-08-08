const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie')

router.get('/movies', (req,res,next) => {
    Movie.find()
    .then(moviesDb => {
        console.log(`movies ${moviesDb} here`)
        res.render('movies/index', {movies: moviesDb})
    })
    .catch((err) => console.log(`something happened while getting movies ${err}`))
})

router.get('/movies/new', (req,res) =>{
    res.render('movies/new')
})


router.post('/movies/new', (req,res) => {
    const {title, director, year, stars, description} = req.body;
    Movie.create({title, director, year, stars, description})
    .then(res.redirect('/movies'))
    .catch((err)=> console.log(`error while creating a new movie ${err}`))
})


router.get('/movies/:movieId', (req,res,next) => {
    const {movieId} = req.params;
    Movie.findById(movieId)
    .then(singleMovie => {
        console.log(`one movie is showing ${singleMovie}`)
        res.render('movies/movie-show', singleMovie)
    })
    .catch((err) => console.log(`an error occurred while showing a movie ${err}`))
}) 


router.post('/movies/:movieId/delete', (req,res) => {
    const {movieId} = req.params
    Movie.findByIdAndDelete(movieId)
    .then(() => res.redirect('/movies'))
    .catch(err => console.log(`error while deleting a movie ${err}`))
})

router.get('/movies/:movieId/edit', (req,res)=> {
    const {movieId} = req.params
    Movie.findById(movieId)
    .then(movieToEdit => {
        res.render('movies/edit', movieToEdit);
    })
    .catch(err => console.log(`error while displaying edit page ${err}`))
})

router.post('/movies/:movieId/edit', (req,res) => {
    const {movieId} = req.params;
    const {title, director, year, stars, description} = req.body;
    Movie.findByIdAndUpdate (
        movieId,
        {title, director, year, stars, description},
        {new:true}
    )
    .then(() => res.redirect('/movies'))
    .catch((err) => console.log(`error while editing a movie ${err}`))
})

module.exports = router;