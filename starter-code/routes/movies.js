const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie.js');

  // Movie Home
  router.get('/', (req, res, next) => {
    Movie.find()
      .then(movies => {
        res.render('movies/index', {movies: movies });
      })
      .catch(error => {
        console.log('Error while getting the movies from the DB: ', error);
      })
  });
  // add movie
  router.get('/newMovie', (req, res, next) => {
    res.render('movies/newMovie');
  });
  
  router.post('/', (req, res, next) => {
    const {title, genre, plot} = req.body;
    const newMovie = new Movie({title, genre, plot});
  
    newMovie.save()
    .then((movie) => res.redirect('/movies'))
    //.catch((error) => alert('Introduce todos los campos'));
    .catch((error) => res.render('movies/newMovie'));
  });
  
  // edit movie
  router.get("/editMovie", (req, res, next) => {
    Movie.findOne({ _id: req.query.movies_id})
    .then((movie) => {
      res.render('movies/editMovie', {movie});
    })
    .catch((err) =>{
      console.log(err)
    })
  });
  
  router.post("/editMovie", (req, res, next) => {
    const { title, genre, plot } = req.body;
    Movie.updateOne({ _id: req.query.movies_id }, { $set: { title, genre, plot} }, { new: true })
    .then((movie)=>{
      res.redirect('/movies');
    })
    .catch((error) =>{
      console.log(error);
    });
  });
  // delete movie
  router.post("/:moviesId", (req, res, next) => {
    Movie.findByIdAndRemove({_id: req.params.moviesId})
    .then((movie)=>{
      res.redirect('/movies');
    })
    .catch((error) =>{
      console.log(error);
    });
  });
  //Show movie
  router.get('/:moviesId', (req, res, next) => {
    Movie.findById(req.params.moviesId)
      .then(movie => {
        res.render('movies/showMovies', { movies: movie });
      })
      .catch(error => {
        console.log('Error while retrieving movies details: ', error);
      })
  });
  

module.exports = router;