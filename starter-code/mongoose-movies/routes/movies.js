const express = require('express');
const router  = express.Router();
const Movie    = require('../models/movie')
const Celebrity = require('../models/celebrity');

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((movieInfo) => {
    res.render('movies/index', {listOfMovies: movieInfo})
  })
  .catch((err) => {
    next(err)
  })
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new')
});

router.post('/movies/create', (req, res, next) => {
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
  })
  .then((response) => {
    res.redirect('/movies')
  })
  .catch((err) => {
    next(err);
  })
});

router.post('/movies/delete/:id', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
  .then((response) => {
    res.redirect('/movies')
  })
  .catch((err) => {
    next(err)
  })
});

router.post('/movies/update/:id', (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.id, { 
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot,
      $push: {cast: req.body.theCelebrity}
    })
    .then((response)=>{
        Celebrity.findByIdAndUpdate(req.body.theCelebrity,
            {$push: {movies: req.params.movieID}
        })
            .then((theResponse)=>{
                res.redirect('/movies/'+req.params.movieID)
            })
            .catch((err)=>{
                next(err)
            })
    })
    .catch((err)=>{
        next(err)
    })
});


router.get('/movies/edit/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((aMovie) => {
    Celebrity.find()
    .then((celebInfo) => {
      res.render('movies/edit', {theMovie: aMovie,  celebs: celebInfo});
    })
    .catch((err) => {
      next(err);
    })
  })
  .catch((err) => {
    next(err)
  })
});

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id).populate('cast')
  .then((movieInfo)=>{
      res.render('movies/show', {movieDetails: movieInfo})
    })

  .catch((err)=>{
    next(err);
  });
});

module.exports = router;