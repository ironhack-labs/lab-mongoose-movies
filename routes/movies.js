const express = require('express');
const Movie = require('../models/movie');

const router  = express.Router();

//------------------------------2nd Iteration---------------------------------//
////////////////////////////////////////////////////////////////////////////////
router.get('/', (req, res, next) => {
  Movie.find({}, (err, movies) => {
    if (err) { return next(err) }

    res.render('movies/index', { movies });

  });
});
//------------------------------4th Iteration---------------------------------//
////////////////////////////////////////////////////////////////////////////////
router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/', (req, res, next) => {
  const movieInfo = {
      title : req.body.title,
      genre : req.body.genre,
      plot  : req.body.plot
  };

  const newMovie = new Movie(movieInfo);

  newMovie.save( (err) => {
    if (err) { return next(err) }
    // redirect to the list of celebrities if it saves
    return res.redirect('/movies');
  });
});

//------------------------------3rd Iteration---------------------------------//
////////////////////////////////////////////////////////////////////////////////
router.get('/:id', (req, res, next) => {
  let movieId = req.params.id;
  console.log(movieId);
  Movie.findById(movieId, (err, movie) => {
    if (err) { return next(err); }
    res.render('movies/show', {movie});
  });
});

//------------------------------5th Iteration---------------------------------//
////////////////////////////////////////////////////////////////////////////////
router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;

  Movie.findByIdAndRemove(id, (err, movie) => {
    if (err){ return next(err); }
    return res.redirect('/movies');
  });
});

//------------------------------6th Iteration---------------------------------//
////////////////////////////////////////////////////////////////////////////////
router.get('/:id/edit', (req, res, next) => {
  const movieId = req.params.id;

  Movie.findById(movieId, (err, movie) => {
    if (err) { return next(err); }
      res.render('movies/edit', { movie });
  });
});

router.post('/:id', (req, res, next) => {
  const movieId = req.params.id;

  const updates = {
      title : req.body.title,
      genre : req.body.genre,
      plot  : req.body.plot
  };

Movie.findByIdAndUpdate(movieId, updates, (err, movie) => {
  if (err){ return next(err); }
  return res.redirect('/movies');
});
});


module.exports = router;
