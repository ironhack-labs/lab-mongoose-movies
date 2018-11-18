const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');

router.get('/', (req, res, next) => {
  Movie.find({})
    .then(movies => {
      res.render('movies/index', { movies })
    })
    .catch(error => console.log("Error to find movies" + error))
});

router.get('/new', (req, res, next) => {
  res.render('movies/new')
})

router.get('/:_id/edit', (req, res, next) => {
  Movie.findById(req.params._id)
    .then((movie) => {
      res.render('movies/edit', { movie })
    })
    .catch(error => console.log("Error to edit the movie" + error))
})

router.get('/:_id', (req, res, next) => {
  Movie.findById(req.params._id)
    .then(movie => {
      res.render('movies/show', { movie })
    })
    .catch(error => console.log("Error to find a movie" + error))
})

router.post('/', (req, res, next) => {
  const genericMovie = new Movie();
  genericMovie.title = req.body.title;
  genericMovie.genre = req.body.genre;
  genericMovie.plot = req.body.plot;
  genericMovie.save()
    .then(() => {
      res.redirect('/movies')
    })
    .catch(error => {
      console.log("Error to add a new movie" + error)
      res.redirect('movies/new')
    })
})

router.post('/:_id', (req, res, next) => {
  movieEdited = {}
  movieEdited.title = req.body.title;
  movieEdited.genre = req.body.genre;
  movieEdited.plot = req.body.plot;
  Movie.findByIdAndUpdate(req.params._id, movieEdited)
    .then(() => {
      res.redirect('/movies')
    })
    .catch(error => console.log("Error to update a movie" + error))
})

router.post('/:_id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params._id)
    .then(() => {
      res.redirect('/movies')
    })
    .catch(error => console.log("Error to remove a movie" + error))
})



module.exports = router;