const express = require('express');
const Movie = require('../models/Movie.js');
const router = require('./index.js');


router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(movies => {
            res.render('movies/index', movies);
        })
        .catch(err => {
            next.call
            return err
        })
});

router.get('/movies/:id', (req, res, next) => {
    const movieId = req.params.id
    Movie.findById(movieId)
        .then(movie => {
            res.render('movies/show', movie)
        })
        .catch(err=>{
            next.call
            return err
        })
})

router.get('/movies/new', (req, res, next) => {
    res.render('movies/new')
})

router.post('/movies', (req, res, next) => {
    
    const newMovie = req.body

    Movie.create(newMovie)
        .then(() => {
            res.redirect('/movies')
        })
        .catch(err => {
            console.log(`Error while creating the film`)
            res.render('movies/new')
        })
})

router.post('/movies/:id/delete', (req, res, next) => {
    const movieId = req.body.id
    Movie.findByIdAndDelete(movieId)
        .then(() => {
            res.redirect('/movies')
        })
        .catch(err => {
            next.call
            return err
        })
})

router.get('/movies/:id/edit', (req, res, next) => {
    const MovieId = req.params.id

    Movie.findById(MovieId)
        .then(movie => {
            res.render('movies/edit', movie)
        })
        .catch(err => {
            next.call
            return err
        })
})

router.post('/movie/:id', (req, res, next) => {
    const movieId = eq.params.id
    const editedMovie = req.body

    Movie.findByIdAndUpdate(movieId, editedMovie)
        .then(() => {
            res.redirect(`/movies/${movieId}`)
        })
        .catch(err => {
            next.call
            return err
        })
})