const express = require('express');
const Movie= require('../models/movie');

const router  = express.Router();

router.get('/', (req, res, next) => {
  Movie.find({}, (err, result) => {
    if (err) { return next(err) }
    console.log(result)
    res.render('movies/index', {

      movies: result
    });
  });
});



router.get('/:id', (req, res, next) => {
  let id = req.params.id
  Movie.findById(id, (err, details) => {
    console.log(details)
    res.render('movies/show', {

      movies: details

    })
  })
});









module.exports = router;
