var express = require('express');
var router = express.Router();
const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
  Movie.find({}, (error, movies)=> {
    if (error) {
      next(error);
    } else {
      console.log(movies);
      res.render('movies/index', { movies });
    }
  });
});


//ADD A MOVIE
router.get('/new', (req, res) => {
  res.render('movies/new');
});

router.post('/', (req, res) => {
  let movie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  console.log(movie)
  Movie.create( movie, (err, doc) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/movies');
    }
  });
});

// MOVIE SHOW PAGE
router.get('/:movieId', (req, res, next) => {
  let movieId = req.params.movieId;
  Movie.findById(movieId, (err, movie ) => {
    if (err) {
      next(err);
    } else {
      console.log(movie);
      res.render('movies/show', { movie: movie})
    }
  });
});

// DELETE A MOVIE
router.post('/:movieId/delete', (req, res, next) => {
  let movId = req.params.movieId;
  Movie.findByIdAndRemove(movId, (err, movie)=> {
    if (err) {
      next(err)
    } else {
      res.redirect('/movies')
    }
  });
});

// PULL UP EDIT CELEBRITY FORM PAGE
router.get('/:movieId/edit', (req, res, next) => {
  let movId = req.params.movieId;
  Movie.findById(movId, (err, movie) => {
    if(err) {
      next(err)
    } else {
      res.render('movies/edit', {movie: movie});
    }
  });
});

// POST EDITED MOVIE INFORMATION TO CELEB
router.post('/:movieId/update', (req, res, next) => {
  let movieToUpdate = {
    title : req.body.title,
    genre : req.body.genre,
    plot  : req.body.plot
  }
  Movie.findByIdAndUpdate(req.params.movieId, movieToUpdate, (err, movie) => {
    if (err) {
      next(err)
    } else {
      res.redirect('/movies');
    }
  })
});



module.exports = router;
