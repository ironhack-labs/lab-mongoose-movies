var express = require('express');
var router = express.Router();
const Movie = require('../models/celebrity');

//metodo get.
//movies: iteration 8. listing our movies.
router.get('/', (req, res, next) => {
  Movie.find()
  .then( (allTheMoviesFromDB) => {
      console.log('Retrieved movies from DB:', allTheMoviesFromDB);
      res.render('movies/index', { movies: allTheMoviesFromDB } );
  })
  .catch( error => {
      console.log('Error while getting the celebrities from the DB: ', error);
  })
})

