var express = require('express');
var router = express.Router();

const Movie = require('../models/movie')

router.get('/', (req, res, next) => {
  Movie.find({},  (error, movies) => {
    if (error) return next(error)
    else res.render('movies/index', { movies })
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