const express = require('express');
const movieRouter  = express.Router();
const Movie = require('../models/Movie');


movieRouter.get('/movies', (req, res, next) => {
  if (req.session.currentUser){
    
    Movie.find()
    .then((theThingWeGetBackFromDB)=>{
      res.render('movies/index', {user: req.session.currentUser, allTheMovies: theThingWeGetBackFromDB})
    })
    .catch((err)=>{
      next(err);  
    })
  }  else {
    req.session.errorCount = 1
    req.session.errorMessage = "Sorry you must be logged in to use this page";
    res.redirect('/login');

  }
})



movieRouter.get('/movies/new', (req, res, next)=>{
  res.render('movies/new');
});


movieRouter.post('/movies', (req, res, next)=>{
  const {theTitle, theGenre, thePlot} = req.body;
  let newMovie = {title: theTitle, genre: theGenre, plot: thePlot}
  Movie.create(newMovie)
  .then (()=>{
    res.redirect('movies')
  })
  .catch ((err)=>{
    res.render('movies/new')
    next(err);
  })
});


movieRouter.get('/movies/:id', (req, res, next)=>{
  
  let theID = req.params.id;
  Movie.findById(theID)
  .then((oneSingleMovie)=>{
    res.render('movies/show', {theMovie: oneSingleMovie})
  })
  .catch((err)=>{
    next(err);
  })
});


movieRouter.post('/movies/:id/delete', (req, res, next)=>{
  Movie.findByIdAndRemove(req.params.id)
  .then (()=>{
    res.redirect('/movies')
  })
  .catch ((err)=>{
    next(err);
  })
});



movieRouter.get('/movies/:id/edit', (req, res, next)=>{
  Movie.findById(req.params.id)
  .then((movieFromDb)=>{
    res.render('movies/edit', {movie: movieFromDb})
  .catch((err)=>{
    next(err);
  })
  })
});

movieRouter.post('/movies/:id', (req, res, next)=>{
  let theID = req.params.id
  Movie.findByIdAndUpdate(theID, req.body)
  .then(()=>{
    res.redirect('/movies/');
  })
  .catch((err)=>{
    next(err);
  })
});


module.exports = movieRouter;