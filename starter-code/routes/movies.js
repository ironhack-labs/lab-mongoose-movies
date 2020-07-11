const express = require('express');
const Movie = require('../models/movie');
const router  = express.Router();

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((dbMovies) => {
      console.log(dbMovies)
      res.render('movies/index', dbMovies)
    })
    .catch(error => console.log('Error retrieving movies', error))
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new')
});

router.post('/movies', (req, res, next) => {
  const body = req.body
  const newMovie = {
    title: body.title,
    genre: body.genre,
    plot: body.plot
  }
  Movie.create(newMovie)
    .then(() => {
      res.redirect('/movies')
    })
    .catch(error => {
      console.log('Error adding a new movie', error)
      res.render('movies/new')
    })

})

router.get('/movies/:id', (req, res, next) => {
  const movieID = req.params.id
  Movie.findById(movieID)
    .then((details) => {
      res.render('movies/show', details)
    })
    .catch(error => console.log('Error retrieving celebrity details', error))
});

router.post('/movies/:id/delete', (req, res, next) => {
    const movieId = req.params.id
    Movie.findByIdAndRemove(movieId)
        .then(() => {
        res.redirect('/movies')
        })
        .catch(error => {
        console.log('Error trying to eliminate the movie', error)
        })
});

router.get('/movies/:id/edit', (req, res, next) => {
    const movieId = req.params.id
    Movie.findById(movieId)
        .then((details) => {
        res.render('movies/edit', details)
        })
        .catch(error => {
        console.log('Error trying to get the edit page', error)
        })      
});

router.post('/movies/:id', (req, res, next) => {
  const movieId = req.params.id
  const body = req.body
  const updatedMovie = {
    title: body.title,
    genre: body.genre,
    plot: body.plot
  }
  Movie.findByIdAndUpdate(movieId, updatedMovie)
    .then(() => {
      res.redirect('/movies')
    })
    .catch(error => console.log('Error editing movie details', error))
});





module.exports = router;