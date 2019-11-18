const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie');



// GET /movies/new - renders the form
router.get('/new', (req, res, next) => {  
  res.render('movies/new');
})

// POST /movies - handles the inputing data to create new movie
router.post('/',  (req, res, next) => {
  console.log(req.body); 
  const { title, genre, plot } = req.body; // destructuring

  Movie.create( { title, genre, plot } )
    .then( movie => { 
      res.redirect('/movies'); 
    })
    .catch( (err) => {
      console.log(err);
      res.render('movies/new');
    });
})


// POST /movies/:id/delete
router.post('/:id/delete', (req, res, next) => {
  console.log(req.params);
  const movieId = req.params.id;

  Movie.findByIdAndRemove(movieId)
    .then( () => {
      res.redirect('/movies'); 
    })
    .catch( (err) => {
      console.log(err);
      next();
    });
})



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
