const express = require('express');
const router = express.Router();
const Movie = require('../models/movie')
const Celebrity = require('../models/celebrity')

/* GET home page */
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((allMovies) => {
            console.log(allMovies)
            res.render('movies/index', { movies: allMovies })
        })
        .catch((err) => {
            next(err);
        })
})

//FIND ALL MOVIES
router.get('/movies/details/:theid', (req, res, next) => {
    let id = req.params.theid

    Movie.findById(id).populate('celebrity')
        // Book.findById(id).populate('author')
        .then((movieObject) => {
            console.log("CELEB", movieObject)
            console.log(movieObject.celebrity)
            res.render('movies/details', { theMovie: movieObject })
        })
        .catch((err) => {
            next(err);
        })
})

router.get('/movies/new', (req, res, next) => {
    Celebrity.find()
        .then((result) => {

            res.render('movies/new', { allTheCelebrities: result });
        })
        .catch((err) => {
            next(err)
        })
})

router.post('/movie/creation', (req, res, next) => {

    let title = req.body.theTitle;
    let celebrity = req.body.theCelebrity
    let genre = req.body.theGenre;
    let plot = req.body.thePlot;

    Movie.create({

            title: title,
            celebrity: celebrity,
            genre: genre,
            plot: plot
        })
        .then(() => {
            res.redirect('/movies')
        })
        .catch((err) => {
            next(err);
        })
})

router.post('/movies/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Movie.findByIdAndRemove(id)
        .then((result) => {
            res.redirect('/movies')
        })
        .catch((err) => {
            next(err)
        })
})

router.get('/movies/editmovie/:id', (req, res, next) => {
    let id = req.params.id;

    Movie.findById(id)
        .then((theMovie) => {
            Celebrity.find()
                .then((celebResult) => {
                    console.log('the movie ---- ', theMovie);
                    console.log('the celeb >>>>> ', celebResult);
                    data = {
                        movie: theMovie,
                        celebs: celebResult
                    };
                    res.render('movies/edit', data);
                })
                .catch((err) => {
                    next(err);
                });
        })
        .catch((err) => {
            next(err)
        })
})




module.exports = router;