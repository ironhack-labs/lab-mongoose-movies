const express = require('express');
const router = express.Router();
const Movie = require('../models/movies');

router.get('/', (req, res, next) => {
  Movie.find()
    .then((movie) => {
      res.render('movies/index', {movie});
    })
    .catch(err => console.log(`Fire!${err}`));
});

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.get('/:id', (req, res, next) => {
  const movie = req.params.id;
  Movie.findById(movie)
    .then((movieDetails) => {
      console.log(movieDetails)
      res.render('movies/show', movieDetails);
    })
    .catch(err => console.log(`Fire!${err}`));
});

router.post('/:id/delete', (req, res, next) => {
  const movie = req.params.id;
  Movie.findByIdAndDelete(movie)
    .then(() => {
      res.redirect('/movies');
    })
    .catch(err => console.log(`Fire!${err}`));


});
router.post('/', (req, res, next) => {
  const { title, genre, plot} = req.body;
  const newMovie = new Movie({title, genre, plot});
  newMovie.save()
  .then(() => {
    res.redirect('/movies');
  })
  .catch(() => {
    res.render('/new');
  });

});

module.exports = router;