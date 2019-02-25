const express = require('express');
const router  = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))

const Movie = require('../models/Movie.js')

router.get('/movies', (req, res) => {
  Movie.find({}, (err, movie) => {
    if(err) res.send(err)
    else res.render('movies/index.hbs', {movie})
  })
})

router.get('/movies/:id', (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    if(err) res.send(err)
    else res.render('movies/show.hbs', {movie})
  })
})

router.get('/new-movie', (req, res) => {
  res.render('movies/new.hbs')
})

router.post('/movies', (req, res) => {
  let newMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }
  Movie.create(newMovie, (err) => {
    if(err) res.status(500).send("Movie not added")
    else res.redirect('/movies')
  })
})

router.post('/movies/:id/delete', (req, res) => {
  Movie.findByIdAndRemove(req.params.id, (err) => {
    if(err) res.status(500).send("Movie not removed")
    else res.redirect('/movies')
  })
})

router.get('/movies/:id/edit', (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    if (err) res.status(500).send("Could not edit movie")
    else res.render('movies/edit.hbs', movie)
  })
})

router.post('/movies/:id', (req, res) => {
  let editMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }
  Movie.findByIdAndUpdate(req.params.id, editMovie, {upsert: true}, (err) => {
    if(err) res.status(500).send("Movie not edited")
    else res.redirect('/movies')
  })
})

module.exports = router;