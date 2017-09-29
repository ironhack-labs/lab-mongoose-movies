var express = require('express');
var router = express.Router();

const Movie = require('../models/movie')

router.get('/', (req, res, next) => {
  Movie.find({},  (error, movies) => {
    if (error) return next(error)
    else res.render('movies/index', { movies })
  })
})

router.get('/new', (req, res, next) => {
  res.render('movies/new')
})

router.post('/', (req, res, next) => {
  let newMovie=  new Movie ({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  })
  newMovie.save( (error, newMovie) => {
    if (error) return next(error)
    else res.redirect('/movies')
  })
})


router.get('/:id', (req, res, next) => {
  let id = req.params.id
  Movie.findOne({_id: id}, (error, movie) => {
    if (error) return next(error)
    else res.render('movies/show', { movie })
  })
})

module.exports = router