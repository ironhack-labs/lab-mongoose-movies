const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie.js');

router.get('/', (req, res, next) => {
    Movie.find()
      .then(movies => res.render('movies/index', { movies }))
      .catch(error => console.log('Error while getting the movies from the DB: ', error));
  });
  
router.get('/new', (req, res, next) => res.render('movies/new'));

router.post('/new', (req, res, next) => {
    Movie.create(req.body)
        .then(()=> res.redirect('/movies'))
        .catch(err => {
            console.log(err);
            res.redirect('/movies/new');
        });
});

router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movie => res.render('movies/show', movie))
    .catch(err => next(err));
});

router.post('/:id/delete', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
        .then(()=> res.redirect('/movies'))
        .catch(err => next(err));
});

router.get('/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movie => res.render('movies/edit', movie))
    .catch(err => next(err));
});

router.post('/:id/edit', (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.redirect('/movies'))
        .catch(err => next(err));
});

module.exports = router;