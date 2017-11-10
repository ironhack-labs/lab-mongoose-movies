const express = require('express');

const Movie = require('../models/movie');

const router = express.Router();

// (app.js) drones --> /drones/ (drones.js) ==> /
router.get('/', (req, res, next) => {
  // Iteration #2
  Movie.find({}, (err, listOfMovies) => {
    if (err) { return next(err); }
    res.render('movies/index', {
      movies: listOfMovies
    });
  });
});

router.get('/new', (req, res, next) => {
  // Iteration #4
  res.render('movies/new');
});

router.post('/', (req, res, next) => {
  // Iteration #4
  let addMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };

  const newMovie = new Movie(addMovie);

  newMovie.save((err) => {
    if (err) {
      console.log("ERROR!!!");
      return res.render('movies/new', {
        movie: newMovie
      });
    }

    return res.redirect('/movies/');
  });
});

router.get('/:id', (req, res, next) => {
  // Iteration #3
  Movie.findById(req.params.id, (err, movie) => {
    if (err){ return next(err); }
    res.render('movies/show',{
      movie: movie
    });
  });
});

router.post('/:id/delete', (req, res, next) =>{
  Movie.findByIdAndRemove(req.params.id, (err, movie) =>{
    if (err) { return next(err);}
    return res.redirect('/movies');
  });
});

router.get('/:id/edit', (req,res,next) => {
  Movie.findById(req.params.id, (err, movie) => {
    if (err) { return next(err);}
    res.render('movies/edit', {
      movie: movie
    });
  });
});
router.post('/:id', (req, res, next) => {
  let actualId = req.params.id;
  let editMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };

  Movie.findByIdAndUpdate(actualId, editMovie, (err, product) => {
    if (err){ return next(err); }
      console.log(actualId);
      return res.redirect('/movies/'+actualId);
  });
});
module.exports = router;
