const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie');

// GET /movies
router.get('/', (req, res, next) => {
  Movie.find()
  .then( (allMoviesFromDB) => { 
      //console.log(allMoviesFromDB)
      res.render('movies/index', { allMoviesFromDB }); 
  })
  .catch( (err) => console.log(err));
});


module.exports = router;
