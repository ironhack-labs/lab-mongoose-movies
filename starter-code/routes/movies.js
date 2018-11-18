const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')
const mongoose = require('mongoose');


router.get('/', (req, res, next) => {

    Movie.find({})
        .then(allMovies => {
            return res.render('movies', { allMovies });
        })
        .catch(err => {
            next();
            return err;
        })
});


router.get('/new', (req, res, next) => {
    res.render('movies/new');
});

router.post('/new', (req, res, next) => {

    const { title, genre, plot } = req.body;
    const newMovie = new Movie({ title, genre, plot });

    newMovie.save()
        .then((movie) => {
            res.redirect('/movies/');
        })
        .catch(err => {
            console.log(err);
            return res.render('movies/new', { errorMessage: "There was an error, please resend the form" });
        })
});

router.get('/show/:movieId', (req, res, next) => {

    let id = req.params.movieId;

    Movie.findById(id)
        .then(movieData => {
            return res.render('movies/show', { movieData });
        })
        .catch(err => {
            next();
            return err;
        })
});

// router.post('/:id/delete', (req, res, next) => {
//     let id = req.params.id;

//     Celebrity.findByIdAndRemove(id, (err, todo) => {

//         if (err) return res.status(500).send(err);

//         return res.redirect('/celebrities/');
//     });
// });

// router.post('/:id/edit', (req, res, next) => {
//     let id = req.params.id;
//     Celebrity.findById(id)
//         .then(celebrityData => {
//             return res.render('celebrities/edit', { celebrityData });
//         })
//         .catch(err => {
//             next();
//             return err;
//         })
// });

module.exports = router;