const express = require('express');
const router = express.Router();

const Movie = require('../models/movie')

// READ
// GET /movies
router.get('/', (req, res, next) => {

    Movie.find().then((movies) => {
        console.log('all my movies: ' + movies)
        let obj = {
            allMovies: movies
        }
        res.render('./movies/movies-list', obj);
    })

});



router.get('/show/:identifier', (req, res) => {

    console.log(req.params.identifier)

    Movie.findById(req.params.identifier).then((movie) => {
        let obj = {
            oneMovie: movie
        }
        res.render('./movies/show', obj);
    })

})

// CREATE
// GET /movies/add
// this is the form
router.get('/new', (req, res, next) => {

    Movie.find().then((newmovie) => {
        res.render('./movies/new', {
            newMovie: newmovie

        });
        console.log("my new movie: " + newmovie)
    })

});


// CREATE
// POST /movies/add
router.post('/new', (req, res) => {

    console.log("req.body", req.body)

    let movie = new Movie({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    })

    movie.save().then(() => {
        res.redirect('/movies')
    })

})


// UPDATE
// GET /movies/:identifier/edit -> show the form
router.get('/:identifier/edit', (req, res, next) => {

    Movie.findById(req.params.identifier).then((movie) => {
        
        res.render('movies/edit', {
            myMovie: movie
        })
    })

})

// UPDATE
// POST /movies/edit
router.post('/:identifier/edit', (req, res, next) => {

    console.log("req.body", req.body)

    Movie.findByIdAndUpdate(req.params.identifier, {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    }).then(() => {
        res.redirect('/movies')
    })

})


// DELETE
// POST /movies/delete/:identifier
router.post('/delete/:identifier', (req, res) => {

    console.log(req.params.identifier)

    Movie.findByIdAndDelete(req.params.identifier).then(() => {
        res.redirect('/movies')
    })

})




module.exports = router;