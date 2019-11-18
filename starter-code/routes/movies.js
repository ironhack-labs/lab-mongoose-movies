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


// GET /movies/:id/edit - renders the form
router.get('/:id/edit', (req, res, next) => {
  console.log(req.params);
  const movieId = req.params.id;

  Movie.findById(movieId)
    .then( (oneMovie) => {
      console.log(oneMovie);
      res.render('movies/edit', { oneMovie })
    })
    .catch( (err) => {
      console.log(err);
      next();
    });
});

// POST /movies/:id - handles the inputing data in the edit form
router.post('/:id',  (req, res, next) => {
  console.log('PARAMS -->', req.params);
  console.log('BODY -->', req.body);
  // const body = JSON.parse(JSON.stringify(req.body))
  // console.log('BODY -->', body);
  const { id } = req.params;
  const { title, genre, plot } = req.body; 

  Movie.updateOne({ id }, { title, genre, plot }, { new: true } )
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
