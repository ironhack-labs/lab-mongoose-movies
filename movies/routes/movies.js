const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
  Movie.find({}, (err, movies) => {
    if (err) { return next(err) }

    res.render('movies/index', {
      movies: movies
    });
  });
});



router.post('/', (req, res, next) => {
  const MovieInfo = {
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
  };

  const newMovie = new Movie(MovieInfo);

  newMovie.save( (err) => {
    if (err) { return next(err) }
    // redirect to the list of celebrities if it saves
    return res.redirect('/movies');
  });
});



router.get('/new', (req, res) => {
  res.render('movies/new')
})





router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id, (err, movies)=>{
    if (err) {
      next(err)
    } else {
        res.render('movies/edit', { movies: movies })
    }
  })
});

router.post('/:id/update', (req, res, next) => {
  let movieToUpdate = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }
  Movie.findByIdAndUpdate(req.params.id, movieToUpdate, (err, movies)=>{
    if (err) {
      next(err)
    } else {
      res.redirect('/movies');
    }
  })
});




router.get('/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id, (err, movies)=>{
    if (err) {
      next(err)
    } else {
      res.redirect('/movies')
    }
  })
});


router.get('/:movieId', (req, res, next) => {
  let movieId = req.params.movieId;

  Movie.findById(movieId, (err, movies) => {
    if (err) {  next(err); }
    res.render('movies/show', { movies: movies });
  });
});


module.exports = router;
