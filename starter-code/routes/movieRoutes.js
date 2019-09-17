const express = require('express');
const router = express.Router();
const Movie = require('../models/movie')

//List all movies
router.get('/movies', (req, res, next)=>{
    Movie.find()
    .then((listOfAllMovies)=>{
        res.render('listOfMovies', {movies: listOfAllMovies})
    })
    .catch((err)=>{
        next(err)
    })
})
//END

//Details Page
router.get('/movies/details/:id', (req, res, next)=>{
    let id = req.params.id;
    Movie.findById(id)
    .then((movieObject)=>{
        res.render('movieDetailsPage', {thatMovie: movieObject})
    })
    .catch((err)=>{
        next(err)
    })
})
//END

//Create New
router.get('/movies/create-new-movie', (req,res,next)=>{
    res.render('addNewMovie')
})

//Save New Movie Creation
router.post('/movies/creation', (req, res, next)=>{
    let title = req.body.theTitle;
    let genre = req.body.theGenre;
    let plot = req.body.thePlot

    Movie.create({
        title: title,
        genre: genre,
        plot: plot
    })
    .then((result)=>{
        res.redirect('/movies')
    })
    .catch((err)=>{
        next(err)
    })
})

//Delete
router.post('/movies/delete/:id', (req, res, next)=>{
    let id = req.params.id
    Movie.findByIdAndRemove(id)
    .then((result)=>{
        res.redirect('/movies')
    })
    .catch((err)=>{
        next(err)
    })
})
module.exports = router

