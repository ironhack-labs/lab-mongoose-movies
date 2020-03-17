const express = require('express');
const routerMovie = express.Router();
const Movie = require('../models/Movie')



routerMovie.get('/', (req, res) => {
  Movie.find()
    .then( (allMovies) => {
    res.render('movies', {movies: allMovies})
  })
    .catch( (err) => console.log(err));
})

routerMovie.get('/new', (req, res) =>{
  res.render('movies/new');
})

routerMovie.post('/new', (req, res) =>{
  const {title, genre, plot} = req.body;
  Movie.create({title, genre, plot})
    .then((newMovie) => {
      res.redirect('/movies')
    })
    .catch( (err) => {
      res.render('movies/new');
    })
})

routerMovie.post('/:id/delete', (req, res) =>{
  Movie.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/movies')
    })
    .catch( (err) => console.log(err));
})

routerMovie.get('/:id', (req, res) =>{
  Movie.findById(req.params.id)
    .then( oneMovie => {
      res.render('movies/show', {movie: oneMovie})
    })
    .catch( (err) => console.log(err));
})

routerMovie.post("/:id", (req, res, next) => {
    const { title, genre, plot} = req.body;    
    Movie.updateOne({ _id: req.params.id }, { $set: { title, genre, plot} })
    .then(() => res.redirect("/movies"))
    .catch(err => next(err));
});


routerMovie.get('/:id/edit', (req, res) =>{
  Movie.findById(req.params.id)
    .then( oneMovie => {
      res.render('movies/edit', {movie: oneMovie})
    })
    .catch( (err) => console.log(err));
})


module.exports = routerMovie; 
