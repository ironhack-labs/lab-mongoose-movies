const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie');


router.get('/', (req, res, next) => {
  Movie.find({})
    .then ( movies => {
      //console.log(movies);
      res.render('movies/index', {movies});})
    .catch( ()=> console.log('Error in celebrities route'))
});




module.exports = router;
