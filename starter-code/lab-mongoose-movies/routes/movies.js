const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

//GET CREATE
router.get('/new', (req, res, next) => {
  res.render('movies/new')
})

//POST CREATE
router.post('/new', (req, res, next) => {
  const {title, genre, plot} = req.body;
  Movie.create({title: title, genre: genre, plot: plot})
  .then(movie => {
    console.log("Movie created:", movie);
    res.redirect('/movies')
  }).catch(e => console.log(e))
})

//GET LIST
router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies/index', {movies})
  }).catch(next)

})

//GET DETAIL
router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then( movie => {
    res.render('movies/show', {movie})
  }).catch(next)
})

//GET UPDATE
router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie => {
    res.render('movies/edit', {movie})
  }).catch(next)
})

//POST UPDATE
router.post('/:id', (req, res, next) => {
  const {title, genre, plot} = req.body;
  Movie.findByIdAndUpdate(req.params.id, {title: title, genre: genre, plot:plot})
  .then(updated => {
    let stringId = encodeURIComponent(updated._id);
    res.redirect('/movies/' + stringId);
  }).catch(next)
})

//POST DELETE
router.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
  .then(deleted => {
    console.log('Movie Deleted', deleted);
    res.redirect('/movies');
  }).catch(next)
})

module.exports = router;