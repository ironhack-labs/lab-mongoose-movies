const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie');



// GET /movies/id (details page)
router.get('/:id', (req, res, next) => {
  console.log(req.params);
  const movieId = req.params.id;

  Movie.findById(movieId)
    .then( (movieDetails) => {
      // console.log('MOVIE DETAILS', movieDetails);
      res.render('movies/show', { movieDetails });
    })
    .catch( (err) => console.log(err));
});


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
