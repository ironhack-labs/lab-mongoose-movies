const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')
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

module.exports = router;