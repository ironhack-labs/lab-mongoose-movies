var express = require('express');
var router = express.Router();
const Movies = require('../models/movie')


/* GET movies listing. */
router.get('/', function(req, res, next) {
  Movies.find({})
  .then(movies=>{
    //console.log(movies)
    res.render('movies/index', {movies});
  })
  .catch(error=>{
    next(error)
  })
});



// Create New movie
router.get('/new', function (req, res, next) {
  res.render('movies/new', {msg: 'Create new movie'})
})

// save new movie
router.post('/', function (req, res, next) {
 
  let movie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }

  newMovie = new Movies(movie)
  newMovie.save ()
    .then(movie => {
      console.log(`${movie.title} inserted in database`)
      res.redirect('/movies')
    })
    .catch(error => {
      res.redirect('/movies/new')
    })
})

//MODIFY
router.get('/:id/edit', function (req, res, next) {
  id = req.params.id
  //console.log(id)
  Movies.findById(id)
    .then(movie => {
      //console.log(movie)
      res.render('movies/edit', movie );
    })
    .catch(error => {
      next(error)
    })
});

//delete movie
router.post('/:id/delete', function (req, res, next) {
  id = req.params.id
  //console.log(id)
  Movies.findByIdAndRemove(id)
    .then(movie => {
      //console.log(movie)
      res.redirect('/movies');
    })
    .catch(error => {
      next(error)
    })
})

//UPDATE
router.post('/:id', function (req, res, next) {
  id = req.params.id
  let movie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  }
  
  Movies.findByIdAndUpdate(id,movie)
    .then(movie => {
      //console.log(movie)
      res.redirect('/movies');
    })
    .catch(error => {
      next(error)
    })
})

// All :id in last position for control of variable url
/* GET details of one movie . */
router.get('/:id', function (req, res, next) {
  id = req.params.id
  Movies.findById(id)
    .then(movie => {
      //console.log(movie)
      res.render('movies/show', movie);
    })
    .catch(error => {
      next(error)
    })
});

module.exports = router;
