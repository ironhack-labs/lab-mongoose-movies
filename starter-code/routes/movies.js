const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/new', (req, res, next) => {
  res.render('movie/new');
});

router.post('/new', (req, res, next) => {
  const {title, genre, plot} = req.body;
  const newMovie = new Movie({title, genre, plot});
  newMovie
    .save()
    .then(() => {
      res.redirect('/');
    })
    .catch(error => {
      console.log(error);
    });
});

router.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/');
    })
    .catch(error => {
      console.log('Error in delete movie: ', error);
    });
});

router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movie/edit', {movie});
    })
    .catch(error => {
      console.log('Error in edit movies: ', error);
    });
});

router.post('/:id', (req, res, next) => {
  const {title, genre, plot} = req.body;
  console.log('------>>>>', req.body, title, genre);
  Movie.updateOne({_id: req.params.id}, {title, genre, plot})
    .then(() => {
      res.redirect('/');
    })
    .catch(error => {
      console.log('Error in edit movies: ', error);
    });
});

module.exports = router;
