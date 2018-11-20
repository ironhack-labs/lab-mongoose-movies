const express = require('express');
const router  = express.Router();
const Movie     = require('../../models/Movies');
const mongoose = require('mongoose')

/* GET home page */
router.get('/movie-views/movies', (req, res, next) => {
  Movie.find()
  .then((allMovies)=>{
      res.render('movie-views/movies', {theMovie: allMovies});
  })
  .catch((err)=>{
      next(err);
  })
});





router.get('/movie-views/:id/movie-details', (req, res, next)=>{
  Movie.findById(req.params.id)
  .then((theThingIGetBackFromDB)=>{
      res.render('movie-views/movie-details', {theMovie: theThingIGetBackFromDB})
  })
  .catch((err)=>{
      next(err);
  })
})


router.get('/movie-views/:id/edit-movie', (req, res, next)=>{
    Movie.findById(req.params.id)
    .then((movieInfo)=>{
      res.render('movie-views/edit-movie', {theMovie: movieInfo})
    })
    .catch((err)=>{
      next(err)
    })
  
  })





module.exports = router;