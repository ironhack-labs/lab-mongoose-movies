const express = require('express');
const MovieModel = require('../models/Movie.model');
const router = express.Router();

router.get('/movies', (req, res) => {
  MovieModel.find()
    .then(movies => res.render('movies/index', { movies }))
    .catch(() => { throw Error('No movies found.'); });
});

router.post('/movies', (req, res) => {
  const data = req.body;
  MovieModel.create(data)
    .then(() => res.redirect('movies'))
    .catch(() => res.redirect('/movies/new'));
});

router.get('/movies/new', (req, res) => {
  return res.render('movies/new');
});

router.get('/movies/:id', (req, res) => {
  MovieModel.findById({ _id: req.params.id })
    .then(movie => res.render('movies/show', movie))
    .catch(() => { throw Error('Try again.'); });
});

router.post('/movies/:id', (req, res) => {
  MovieModel.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(() => res.redirect('/movies'))
    .catch(() => res.render('movies/edit', { error: 'Try again.' }));
})

router.post('/movies/:id/delete', (req, res) => {
  MovieModel.findByIdAndDelete({ _id: req.params.id })
    .then(() => res.redirect('/movies'))
    .catch(() => res.render('movies/index', { error: 'Cannot delete the movie.' }));
});

router.get('/movies/:id/edit', (req, res) => {
  MovieModel.findById({ _id: req.params.id })
    .then(movie => res.render('movies/edit', movie))
    .catch(() => res.render('movies/edit', { error: 'Try again.' }));
});

module.exports = router;