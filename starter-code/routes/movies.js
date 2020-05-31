const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Movie = require('../models/movies.js')


router.get('/', (req, res, next) => {
    Movie.find()
        .then(movies => res.render('movies/index.hbs', {
           movies
        }))
        .catch(err => next(err))
});

router.get('/new', (req, res, next) => {
    res.render('movies/new.hbs')
})

router.post('/', (req, res, next) => {
    const {
        title,
        genre,
        plot
    } = req.body
    const newMovie = new Movie({
        title,
        genre,
        plot
    })
    let createErr = false;
    try {
        newMovie.save()
            .then(movie => res.redirect('/movies'))
            .catch(err => {
                console.log(`Hubo un error creando el documento -----> ${err}`)
            })
    } catch (err) {
        createErr = true;
        res.render('movies/new.hbs', createErr)
    }

})

router.get('/:id', (req, res, next) => {
    console.log(req.params.id)
    Movie.findOne({
            _id: req.params.id
        })
        .then(movie => res.render('movies/show.hbs', {
            theMovie: movie
        }))
        .catch(err => next(err))
})

router.post('/:id/delete', (req, res, next) => {
    console.log(req.params)
    Movie.findOneAndDelete({
            _id: new mongoose.mongo.ObjectID(req.params.id)
        })
        .then((elem) => {
            console.log(elem)
            res.redirect('/movies')
        })
        .catch(err => next(err))
})

router.post('/:id', (req, res, next) => {
    const {
        title,
        genre,
        plot
    } = req.body;
    Movie.findByIdAndUpdate(req.params.id, {
            $set: {
                title,
                genre,
                plot
            }
        }, {
            new: true
        })
        .then(movie => {
            res.redirect('/movies')
        })
        .catch(err => next(err))
})

router.get('/:id/edit', (req, res, next) => {
    Movie.findOne({
            _id: req.params.id
        })
        .then(movie => res.render('movies/edit.hbs', {
            movie
        }))
        .catch(err => next(err))
})







module.exports = router;