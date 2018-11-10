
const express = require('express');

const router = express.Router();
const Movie = require('../models/movie.js');

/* GET home page. */
router.get('/', (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render('movies/index', {
        title: 'Movies List',
        movies
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
