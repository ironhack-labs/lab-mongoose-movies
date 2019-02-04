const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();

/* GET products listing. */
router.get('/', (req, res, next) => {
  Movie.find({})
    .then((movies) => {
      res.render('movies/index', { movies });
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.create({ title, genre, plot })
    .then((result) => {
      res.redirect('/movies');
    })
    .catch(next);
});

router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((movie) => {
      res.render('movies/show', { movie });
    })
    .catch(next);
});

router.post('/:id', (req, res, next) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;
  Movie.findByIdAndUpdate(id, { title, genre, plot })
    .then((movie) => {
      res.redirect('/movies');
    })
    .catch(next);
});

router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Movie.findByIdAndRemove(id)
    .then((movie) => {
      res.redirect('/movies');
    })
    .catch(next);
});

router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((movie) => {
      res.render('movies/edit', { movie });
    })
    .catch(next);
});

module.exports = router;
