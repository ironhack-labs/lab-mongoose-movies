const express = require('express');
const router  = express.Router();
//
const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
  Movie.find({})
  .then((movies)=>{
    //res.json(movies);
    res.render('movies/index', {movies});
  })
  .catch((err)=>{
    console.log(err);
  })
});

router.get('/new', (req, res, next) => {
  const data = {
    action: "new"
  }
  res.render('movies/new', data);
});

router.post('/', (req, res, next) => {  
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot })
  newMovie.save()
    .then((movie) => {
      res.redirect('/movies');
    })
    .catch((error) => {
      console.log(error);
    })

});

router.get('/:movieId', (req, res, next) => {
  var id = req.params.movieId;
  Movie.findById(id)
  .then((movie)=>{
    res.render('movies/show', movie);
  })
  .catch((err)=>{
    console.log(err);
  })
});

router.post('/:movieId/delete', (req, res, next) => {
  var id = req.params.movieId;
  console.log(id);
  Movie.findByIdAndRemove(id)
  .then((movie)=>{
    res.redirect('/movies');
  })
  .catch((err)=>{
    console.log(err);
  })
});

router.get('/:movieId/edit', (req, res, next) => {
  var id = req.params.movieId;
  Movie.findById(id)
  .then((movie)=>{
    // res.json(movie);
    res.render('movies/edit', {movie});
  })
  .catch(next)
});


router.post('/:id/update' , (req, res, next) =>{
  console.log(req.body);
  const {_id, title, genre, plot } = req.body ;
  console.log(`${_id}, ${title}, ${genre}, ${plot}`);
  Movie.findByIdAndUpdate(_id, req.body , {new: true})
  .then((movie)=>{
    res.redirect('/movies');
  })
  .catch(next)
});

module.exports = router;