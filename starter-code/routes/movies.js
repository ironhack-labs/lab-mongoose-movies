const express = require('express');
const router = express.Router();
const Movie = require('../models/movies');

router.get('/movies', (req, res, next) => {

    Movie.find().then(movies => {
        res.render('movies/index', {
            movies
        });
    }).catch(err => {
        console.log(err)
    })

});

router.post('/movies', (req, res, next) => {

    if (req.body.title == "" || req.body.genre == "" || req.body.plot == "") {
        res.render('movies/new', {
            errorMessage: "All fields are required!"
        });
    } else {

        const newMovie = new Movie({
            title: req.body.title,
            genre: req.body.genre,
            plot: req.body.plot
        });

        newMovie.save().then(result => {
            res.redirect('movies');
        }).catch(err => {
            console.log(err)
        })

    }

});

router.get('/movies/new', (req, res, next) => {
    res.render('movies/new');
});

router.get('/movies/:id', (req, res, next) => {
    let movieId = req.params.id;
    Movie.findOne({
        '_id': movieId
    }).then(movie => {
        res.render('movies/show', {
            movie
        });
    }).catch(err => {
        console.log(err)
    })

});

router.post('/movies/:id', (req, res, next) => {
    let movieId = req.params.id;

    if (req.body.title == "" || req.body.genre == "" || req.body.plot == "") {

        next("All fields are required!");

    } else {

        const {
            title,
            genre,
            plot
        } = req.body;

        Movie.update({
            '_id': movieId
        }, {
            $set: {
                title,
                genre,
                plot
            }
        }).then(movie => {
            res.redirect('/movies');
        }).catch(err => {
            console.log(err)
        })
    }

});

router.get('/movies/:id/edit', (req, res, next) => {
    let movieId = req.params.id;
    Movie.findOne({
        '_id': movieId
    }).then(movie => {
        res.render('movies/edit', {
            movie
        });
    }).catch(err => {
        console.log(err)
    })

});

router.post('/movies/:id/delete', (req, res, next) => {
    let movieId = req.params.id;
    Movie.findByIdAndRemove(movieId).then(movies => {
        res.redirect('/movies');
    }).catch(err => {
        console.log(err)
    })

});



module.exports = router;