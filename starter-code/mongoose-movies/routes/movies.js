const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

// *** CREATE *** //

router.get('/', (req,res,next) => {
    Movie.find({})
    .then(movies=>{
        res.render('movies/index', {movies})
    })
    .catch(err=> next())
})

router.get('/:id', (req,res,next) => {
    Movie.findById(req.params.id)
    .then(movie=>{
        console.log(movie);
        res.render('movies/show', movie)
    })
    .catch(err=> next())

})


router.get('/new', (req,res)=>{
    Movie.find()
    .then(results=>{
        res.render('movies/new', results)
    })
})

router.post('/new', (req,res)=>{
    console.log(req.body);
    const {title, genre, plot} = req.body;
    const newMovie = new Movie(req.body)
    newMovie.save()
    .then((movie) => {
        res.redirect('/movies')
    })
    .catch((err) => {
        throw err;
})
})

// *** DELETE *** //

router.post('/:id/delete', (req,res,next) => {
    Movie.findByIdAndRemove(req.params.id)
    .then(movie=>{
        res.redirect('/movies')
    })
    .catch(err=> next())

})


module.exports = router;