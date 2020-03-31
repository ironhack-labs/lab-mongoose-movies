const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/', (req, res, next) => {
  Movie.find()
    .then(arrMovie => {
      res.render('movie/index', {arrMovie});
    })
    .catch(err => console.log(`error: ${err}`));
});

router.get('/new', (req, res, next) => {
  res.render('movie/new');
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  Movie.findById(id)
    .then(theMovie => {
      res.render('movie/show', {theMovie});
    })
    .catch(error => {
      console.log('Error while retrieving celebrities details: ', error);
    });
});

router.post('/new', (req, res, next) => {
  const {title, genre, plot} = req.body;
  const newMovie = new Movie({title, genre, plot});
  newMovie
    .save()
    .then(() => {
      res.redirect('/movies');
    })
    .catch(error => {
      console.log(error);
    });
});

router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params
  Movie.findByIdAndRemove(id)
    .then(() => {
      res.redirect('/movies');
    })
    .catch(error => {
      console.log('Error in delete movie: ', error);
    });
});

router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params
  Movie.findById(id)
    .then(movie => {
      res.render('movie/edit', {movie});
    })
    .catch(error => {
      console.log('Error in edit movies: ', error);
    });
});

router.post('/:id', (req, res, next) => {
  const {title, genre, plot} = req.body;
  Movie.updateOne({_id: req.params.id}, {title, genre, plot})
    .then(() => {
      res.redirect('/');
    })
    .catch(error => {
      console.log('Error in edit movies: ', error);
    });
});

module.exports = router;
