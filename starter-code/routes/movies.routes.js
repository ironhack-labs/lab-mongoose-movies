const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie')


router.post('/movies/:id', (req, res, next) => {
    const { id } = req.params;
    const { title, genre, plot } = req.body;
  
    Movie.findByIdAndUpdate(id, {title, genre, plot}, {new: true})
      .then(res.redirect('/movies'))
      .catch(err => {
        next;
        console.log('Error updating movie: ', err)
      })
  })

router.get('/movies/:id/edit', (req, res, next) => {
    const { id } = req.params;
  
    Movie.findById(id)
      .then(movieToEdit  => {
        res.render('movies/edit', movieToEdit);
      })
      .catch(err => {
        next;
        console.log('Error retrieving movie: ', err)
      })
  })

router.post('/movies/:id/delete', (req, res, next) => {
    const { id } = req.params; 
  
    Movie.findByIdAndRemove(id)
      .then(res.redirect('/movies'))
      .catch(err => {
        next;
        console.log('Error deleting movie from DB: ', err)
      })
  })

router.post('/movies/new', (req, res, next) => {
    const {title, genre, plot} = req.body;
    const movie = {title: title, genre: genre, plot: plot}
    const newMovie = new Movie(movie)
  
    newMovie.save()
      .then(res.redirect('/movies'))
      .catch(err => res.redirect('/movies/new'))
  });

router.get('/movies/new', (req, res, next) => {
    res.render('movies/new');
  })

router.get('/movies/:id', (req, res, next) => {
    const { id } = req.params;
  
    Movie.findById(id)
      .then(foundMovie => {
        res.render('movies/show', foundMovie)
      })
      .catch(err => {
        next;
        console.log('Error loading movie from DB: ', err)
      })
  })

router.get('/movies', (req, res, next) => {
    Movie.find()
      .then(moviesFromDB => {
        res.render('movies/index', {movies: moviesFromDB})
      })
      .catch(err => {
        next;
        console.log('Error loading movies from DB: ', err)
      })
  })
  


module.exports = router;