const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie");



router.get('/movies', (req, res, next) => {
    Movies
        .find()
        .then(allMovies => {
            res.render('movies/index', { allMovies });
        })
        .catch(err => {
            next();
            console.log(`There was an error : \n ${err}`)
        })
})


router.get('/movies/:id', (req, res, next) => {

    Movies
        .findById({ _id: req.params.id })
        .then(foundMovie => {
            res.render('movies/show', {foundMovie})
        })
        .catch(err => {
            next();
            console.log(`There was an error : \n ${err}`)
        })
})


router.get('/movies/new', (req, res, next) => {
    res.render('movies/new')
})

router.post('/movies/new', (req, res, next) => {

    Movies.findOne({title : req.body.title})
    .then(existMovie => {
        if(existMovie !== null) {
            res.json({alert : "this movie is already registered"})
        }else {
            Movies.create(req.body)
            .then(movieCreated => {
                console.log({alert : "Movie added to the db", movieCreated})
                res.redirect('/movies')
            })
        }
    })
})

module.exports = router;
