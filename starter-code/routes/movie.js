const express = require('express');
const router  = express.Router();
const movie = require('../models/Movie');

router.get('/', (req, res, next) => {
  movie.find()
    .then(movies => {
      res.render('movies/index', { movies });
    })
    .catch(next);
});