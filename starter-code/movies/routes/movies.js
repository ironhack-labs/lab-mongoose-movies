var express = require('express');
const Movie= require('../models/movie');
var router = express.Router();

//View All Movies
router.get('/', function(req, res, next) {
 
  Movie.find({}, (err, movies) => {
    if (err) { return next(err) }
    res.render('movies/index', { movies: movies
    });
  });
});

//Add Movie Page
router.get('/new', function(req, res, next){
  res.render('movies/new')
});

//Add Movie to Database
router.post('/', function(req, res, next){
    var movieInfo = {title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
  }

  var newMovie = new Movie(movieInfo)
  
  newMovie.save((err)=> {
    if(err){
    return res.render('movies/new', { errors: newMovie.errors })}
    return res.redirect("/movies")
  })

});

//View Details of Movie
router.get('/:id', function(req, res, next) {
  var movieId = req.params.id
  Movie.findById(movieId, (err, movie) =>{
      if(err){ return next(err);}
      res.render('movies/show', {movie: movie})
  })
});

//Delete Movie
router.post('/:id/delete', function(req, res, next) {
  var movieId = req.params.id

  Movie.findByIdAndRemove(movieId, (err, movie) =>{
    if (err) {return next(err);}  
    res.redirect('/movies')
  })
})

router.get('/:id/edit', function(req, res, next) {
  var movieId = req.params.id;
  
  Movie.findById(movieId, (err, movie) => {
    if (err){return next(err)}
    return res.render('movies/edit', {movie: movie})
  })
})

router.post('/:id', function(req, res, next) {
  var movieId = req.params.id
  
  var updates= {title: req.body.title, 
      genre: req.body.genre, 
      plot: req.body.plot, 
  }

  Movie.findByIdAndUpdate(movieId, updates, (err, movie) =>{
    if (err){return res.render('movies/edit', {errors: movie.errors})}
    res.redirect('/movies')
  })
})

module.exports = router;
