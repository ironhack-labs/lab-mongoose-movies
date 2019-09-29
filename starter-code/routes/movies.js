const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movie => {    
    res.render('movies/index', { movie });
  })
  .catch(error => {throw new Error(error)})
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new')
})

router.get('/movies/:id', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
  .then(movie => {
    console.log(movie);    
    res.render('movies/show', movie);
  })
  .catch(error => {throw new Error(error)})
});

router.post('/movies', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot })
  newMovie.save()
    .then((movie) => {
      console.log(movie);      
      res.redirect('movies')
    })
    .catch((error) => {
      res.redirect('movies/new')
      throw new Error(error);
    })
})

router.post('/movies/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Movie.findByIdAndRemove(id)
  .then((movie) => {
    console.log(movie);    
    res.redirect('../../movies');
  })
  .catch(error => {throw new Error(error)});
});

router.get('/movies/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
  .then((movie) => {
    res.render('movies/edit', movie)
  })
  .catch(error => {throw new Error(error)});
})

router.post('/movies/:id', (req, res, next) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate(id, { title, genre, plot })
  .then((movies) => {
    res.redirect("../movies")
  })
  .catch(error => {throw new Error(error)});
})

module.exports = router;