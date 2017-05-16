const express = require('express');
const Movie = require('../models/movie-model.js')
const movieRoutes = express.Router();

movieRoutes.get('/movies', (req, res, next) => {
  Movie.find((err, movieList)=>{
    if(err){
      next(err);
      return;
    }

  res.render('movies/movie-list-view.ejs',{
    movies: movieList
  });
});
});

movieRoutes.get('/movies/new',(req, res, next)=>{
  res.render('movies/new-movie-view.ejs');
});

movieRoutes.post('/movies/new',(req, res, next)=>{
  const theMovie = new Movie({
    title:req.body.movieTitle,
    genre: req.body.movieGenre,
    plot: req.body.moviePlot
  });
  theMovie.save((err)=>{
    if(err){
      res.render('movies/new-movie-view.ejs');
      return;
    }
    res.redirect('/movies');
  });
});

movieRoutes.get('/movies/:id',(req, res, next)=>{
  const movieId = req.params.id;
  Movie.findById(movieId, (err, theMovie)=>{
    if (err){
      next(err);
      return;
    }
    res.render('movies/movie-details-view.ejs',{
      movie: theMovie
    });
  });
});

movieRoutes.get('/movies/:id/edit',(req, res, next)=>{
  const movieId = req.params.id;
  Movie.findById(movieId,(err, theMovie)=>{
    if(err){
      next(err);
      return;
    }
    res.render('movies/edit-movie-view.ejs',{
      movie: theMovie
    });
  });
});

movieRoutes.post('/movies/:id',(req, res, next)=>{
  const movieId = req.params.id;
  const movieChanges = {
    title:req.body.movieTitle,
    genre:req.body.movieGenre,
    plot: req.body.moviePlot
  };
  Movie.findByIdAndUpdate(movieId, movieChanges, (err, theMovie)=>{
    if(err){
      next(err);
      return;
    }
    res.redirect('/movies');
  });
});


movieRoutes.post('/movies/:id/delete',(req, res, next)=>{
  const movieId = req.params.id;
  Movie.findByIdAndRemove(movieId,(err, theMovie)=>{
      if (err){
        next(err);
        return;
      }
      res.redirect('/movies');
  });
});



module.exports = movieRoutes;
