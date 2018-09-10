const express = require('express');
const router  = express.Router();
const Movie    = require('../models/movie')
const Celebrity = require('../models/celebrity');

router.get('/movies', (req, res, next) => {
  Movie.find().populate('cast')
  .then((movieInfo) => {
    res.render('movies/index', {listOfMovies: movieInfo})
  })
  .catch((err) => {
    next(err)
  })
})

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new')
})



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
})

router.post('/movies/update/:id', (req, res, next ) => {
  Movie.findById(req.params.id) 
  .then((response) => {
    console.log("the first response ========================= ", response);
    response.set({
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot,
      cast: req.body.cast
    })
  
    return response.save()
    .then((updatedResponse) => {
      console.log("saved all the movie info including cast -------------------------- ", updatedResponse);
      res.redirect('/movies/' + req.params.id)
    })
    .catch((err) => {
      next(err);
    })
  })
  .catch((err) => {
    next(err);
  })
})

router.get('/movies/edit/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((aMovie) => {
    Celebrity.find()
    .then((celebInfo) => {
      data = {
        theMovie: aMovie,
        celebs: celebInfo
      }
      res.render('movies/edit', data)
    })
    .catch((err) => {
      next(err);
    })
  })
  .catch((err) => {
    next(err)
  })
})

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((movieInfo)=>{
    // Celebrity.find({'_id': {$in: [movieInfo.cast]}})
    Celebrity.find({_id: movieInfo.cast})
    .then((celebInfo) => {
      data = {
        movieDetails: movieInfo,
        celebInfo: celebInfo
      }
      res.render('movies/show', data)
    })
    .catch((err) => {
      next(err);
    })
  })
  .catch((err)=>{
    next(err);
  })
});

module.exports = router;