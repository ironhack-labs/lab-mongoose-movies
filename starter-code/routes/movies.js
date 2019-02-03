const express = require('express');
const mongoose = require('mongoose');
const Movie = require('../models/movie.js');

const app = require('../app');

const router = express.Router();

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((data) => {
      const movies = data;
      res.render('movies/index', { movies });
    })
    .catch((err) => {
      console.log('an error happened: ', err);
      next();
    });
});

module.exports = router;
