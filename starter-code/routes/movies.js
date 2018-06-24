const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/add', (req, res, next) => {
  res.render("movies/new")
});

router.post('/add', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot})
  newMovie.save()
  .then((movie) => {
    res.redirect('/movies')
  })
  .catch((error) => {
    console.log(error)
    res.redirect('/movies/add')
  })
});

router.get('/', (req, res, next) => {
  Movie.find()
   .then(movies => {
    res.render('movies/index', {movies});
   })
   .catch(err => {
       console.log(err);
       next();
   });
});

router.get('/:id', (req, res, next) => {

  let movieId = req.params.id;
  if (!req.params.id) { 
    return res.status(404).render('not-found');
  }
  Movie.findById(movieId)
    .then(movie => {
      if (!movie) {
          return res.status(404).render('not-found');
      }
      res.render("movies/show", movie)
    })
    .catch(next)
});

router.post('/:id/delete', (req, res, next) => {

  let movieId = req.params.id;
  Movie.findByIdAndRemove(movieId)
  .then((movie) => {
    if (!movie) {
      return res.status(404).render('not-found');
  }
  console.log('Deleting succes!!');
  res.redirect('/movies')
    })
    .catch(next)
});

router.get('/:id/edit', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findById(movieId)
  .then((movie) => {
    res.render("movies/movieEdit", movie)
  })
  .catch((error) => {
    console.log(error)
  })
});

router.post('/:id/edit', (req, res, next) => {
  let movieId = req.params.id;
  const { title, genre, plot } = req.body;
  Movie.update({_id: movieId}, { $set: { title, genre, plot }},{new: true})
  .then((movie) => {
    res.redirect('/movies')
  })
  .catch((error) => {
    console.log(error)
  })
});

module.exports = router;