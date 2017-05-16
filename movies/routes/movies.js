var express = require('express');
var router = express.Router();
var Movie = require("../models/movie.js");

router.get('/movies', function(req, res, next) {
  Movie.find({}, (err, movies)=> {
    if(err) return next(err);
    res.render("movies/index", {movies:movies});
  })
});

router.get('/movies/new', function(req, res, next) {
  res.render("movies/new");
});

router.post('/movies', function(req, res, next) {
  (new Movie({
    title:req.body.title,
    genre:req.body.genre,
    plot:req.body.plot
  })).save(err=>{
    if(err) return next(err);
    return res.redirect("movies");
  });
});

router.get('/movies/:id/edit', function(req, res, next) {
  Movie.findById(req.params.id, (err, movie)=>{
    if(err) return next(err);
    res.render("movies/edit", {movie:movie});
  })
});

router.post('/movies/:id/edit', function(req, res, next) {
  Movie.findByIdAndUpdate(req.params.id, {
      title:req.body.title,
      genre:req.body.genre,
      plot:req.body.plot
    }, 
    (err, movie)=>{
      if(err) return next(err);
      return res.redirect("/movies");
  });
});

router.get('/movies/:id/delete', function(req, res, next) {
  Movie.findByIdAndRemove(req.params.id, err=>{
      if(err) return next(err);
      return res.redirect("/movies");
  });
});

router.get('/movies/:id', function(req, res, next) {
  Movie.findById(req.params.id, (err, movie)=>{
    if(err) return next(err);
    res.render("movies/show", {movie:movie});
  });
});



module.exports = router;
