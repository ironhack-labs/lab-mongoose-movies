const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');

router.get('/', (req, res, next) => {
  Movie.find({})
    .then(movies => {
      res.render('movies/index', { movies })
    })
    .catch(error => console.log("Error to find movies" + error))
});



module.exports = router;