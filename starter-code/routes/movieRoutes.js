const express = require('express');
const router = express.Router();
const Movie = require('../models/movie')
const Celebrity = require('../models/celebrity')

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
    Movie.findById(id).populate('star')
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
    Celebrity.find()
    .then((result)=>{
        res.render('addNewMovie', {allTheCelebrities: result})
    })
    .catch((err)=>{
        next(err)
    })
})

//Save New Movie Creation
router.post('/movies/creation', (req, res, next)=>{
    let title = req.body.theTitle;
    let genre = req.body.theGenre;
    let plot = req.body.thePlot;
    let star = req.body.theStar;

    Movie.create({
        title: title,
        genre: genre,
        plot: plot,
        star: star
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

