const express = require('express');
const router  = express.Router();
const Movie = require("../models/movie.js");

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies/index',{movies});
  })
  .catch(err => {
    next(err)
  })
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.get('/movies/:id/edit', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findById(movieId)
  .then(movies => {
    res.render('movies/edit',{movies});
  }).catch(err => {
    next(err)
  })
  
});

router.get('/movies/:id', (req, res, next) => {
  let movieId = req.params.id ;
  Movie.findById(movieId)
  .then(movies => {
    res.render('movies/show',{movies});
    
  })
  .catch(err => {
    next(err)
  })
});


router.post('/movies/new', (req, res, next) => {
  const{title,genre,plot} = req.body ;
  new Movie ({title,genre,plot})
  .save().then(Movie =>{
    console.log("Movie created");
    res.redirect("/movies")

  }).catch(err => {
    next(err)
  })
  
});
router.post('/movies/:id', (req, res, next) => {
  let movieId = req.params.id;
  const{title,genre,plot} = req.body
  Movie.findByIdAndUpdate(movieId, {title,genre,plot})
  .then(movies => {
    res.redirect("/movies");
    
  })
  .catch(err => {
    next(err)
  })
});

router.post('/movies/:id/delete', (req, res, next) => {
  let movieId = req.params.id 
  Movie.findByIdAndRemove(movieId)
  .then(movies => {
    res.redirect("/movies");
    
  })
  .catch(err => {
    next(err)
  })
});


module.exports = router;