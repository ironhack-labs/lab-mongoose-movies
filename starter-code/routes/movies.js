const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('../views/movies/index.hbs', { movies });
  })
  .catch(err => console.log(err));
});

module.exports = router;