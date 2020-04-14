const express = require('express');
const router = express.Router();

// neccessary connection to database-model
const Movie = require('../models/movie')

// GET /celebrities --> List of
router.get('/', (req, res, next) => {
    Movie.find()
        .then((movies) => {
            //console.log('all our movies: ' + movies)
            res.render('movies/index', {
                allMovies: movies
            });
        })
        .catch((error) => {
            console.log(error);
        })
});

// GET /movies/new  --> shows form to users
router.get('/new', (req, res, next) => {
    //res.send('anything')
    res.render('movies/new');
});

// POST /movies/new --> User can add their Movie
router.post('/new', (req, res, next) => {
    // console.log("req.body", req.body)
    let userMovie = new Movie({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot
    })
    userMovie.save()
        .then(() => {
            res.redirect('/movies')
        });
});


// GET /movies/:id/edit ---> show our form
router.get('/:identifier/edit', (req, res, next) => {
    Movie.findById(req.params.identifier).then((movie) => {
        res.render('movies/edit', movie)
    })
});

// POST /movies/:id/edit ---> show our form, save to use because a specified path follows :id
router.post('/:identifier/edit', (req, res, next) => {
    Movie.findByIdAndUpdate(
        req.params.identifier, {
            title: req.body.title,
            genre: req.body.genre,
            plot: req.body.plot
        }
    ).then(() => { res.redirect('/movies')})
});

// GET /movies/:id/delete --> delete specific entry+
router.get('/:identifier/delete', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.identifier).then(() => {
        res.redirect('/movies')
    })
});


// GET /movies/:identifier --> Detail of
router.get('/:identifier', (req, res, next) => {
    Movie.findById(req.params.identifier)
        .then((movie) => {
            res.render('movies/show', {
                showMovie: movie
            })
        })
        .catch((error) => {
            console.log(error);
        })
});


module.exports = router;