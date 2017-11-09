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













module.exports = router;
