const express = require('express');
const router = express.Router();
const moviesSchema = require('../models/movie');

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.get('/', (req, res, next) => {
  moviesSchema
    .find()
    .then(movies => res.render('movies/index', { movies }))
    .catch(err => console.log('An error ocurred: ', err));
});

router.get('/:id', (req, res, next) => {
  moviesSchema
    .findById(req.params.id)
    .then(movie => res.render('movies/show', { movie }))
    .catch(err => console.log('An error ocurred: ', err));
});

router.get('/:id/edit', (req, res, next) => {
  moviesSchema
    .findById(req.params.id)
    .then(movie => res.render('movies/edit', { movie }))
    .catch(err => console.log('An error ocurred: ', err));
});

router.post('/', (req, res, next) => {
  if (req.body.name == '' || req.body.occupation == '' || req.body.catchPhrase == '') {
    res.render('movies/new', {
      errorMessage: 'Please fill all the fields'
    });
  }
  moviesSchema
    .create({
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot
    })
    .then(done => {
      console.log(done);
      res
        .render('movies/new', {
          successMessage: 'Movie saved successfully'
        })
        .catch(err => console.log('An error ocurred:', err));
    });
});

router.post('/:id/delete', (req, res, next) => {
  moviesSchema
    .findByIdAndRemove(req.params.id)
    .then(done => {
      console.log('The next element was deleted from database: ', done);
      res.redirect('/movies');
    })
    .catch(err => console.log('An error ocurred: ', err));
});

router.post('/:id', (req, res, next) => {
  const movieModification = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  moviesSchema
    .findByIdAndUpdate(req.params.id, movieModification)
    .then(() => res.redirect('/movies'))
    .catch(err => console.log('An error ocurred: ', err));
});

module.exports = router;
